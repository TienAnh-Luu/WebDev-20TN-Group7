'use strict';

const controller = {};
const models = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { NAV_ITEMS } = require('../controllers/constrants');

controller.isEditor = async (req, res, next) => {
  if (req.user.role_id === 4) {
    req.user = await models.User.findOne({
      attributes: ['id', 'username', 'email', 'name', 'avatar_link', 'role_id', 'premiumTime'],
      include: [
        {
          model: models.Editor,
          attributes: ['id', 'work_email', 'telephone', 'manage_category_id'],
        },
      ],
      where: { id: req.user.id },
    });
    return next();
  }

  res.status(404).render('error', {
    message: 'Không tìm thấy trang',
  });
};

controller.showCheck = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  const post = await models.Post.findOne({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'background_image_link',
      'content',
      'is_premium',
      'published_time',
      'main_category_id',
      'category_id',
      'updatedAt',
      'status',
    ],
    where: { id: queryId },
    include: [
      {
        model: models.Writer,
        attributes: ['nickname'],
      },
    ],
  });

  if (
    req.user.Editor.manage_category_id !== post.main_category_id &&
    req.user.Editor.manage_category_id !== post.category_id
  ) {
    res.status(404).render('error', {
      message: 'Không tìm thấy trang',
    });
    return;
  }

  // Headline
  const categoryHeadline = {};
  categoryHeadline.main = await models.Category.findByPk(post.main_category_id);
  if (post.main_category_id != post.category_id)
    categoryHeadline.subs = [await models.Category.findByPk(post.category_id)];
  res.locals.categoryHeadline = categoryHeadline;

  // Tag
  const tagIds = [];
  await models.PostTag.findAll({
    where: { post_id: queryId },
    attributes: ['tag_id'],
  }).then((tags) => {
    tags.forEach((tag) => tagIds.push(tag.tag_id));
  });

  post.tags = await models.Tag.findAll({
    where: {
      id: { [Op.in]: tagIds },
    },
  });

  res.locals.post = post;
  res.locals.data = req.user;
  res.locals.navItems = NAV_ITEMS[parseInt(req.user.role_id, 10) - 1];
  res.render('editor-check');
};

controller.showApprove = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);

  const post = await models.Post.findOne({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'background_image_link',
      'content',
      'is_premium',
      'published_time',
      'main_category_id',
      'category_id',
      'updatedAt',
      'status',
    ],
    where: { id: queryId },
    include: [
      {
        model: models.Writer,
        attributes: ['nickname'],
      },
    ],
  });

  // Headline
  const categoryHeadline = {};
  categoryHeadline.main = await models.Category.findByPk(post.main_category_id);
  if (post.main_category_id != post.category_id)
    categoryHeadline.subs = [await models.Category.findByPk(post.category_id)];
  res.locals.categoryHeadline = categoryHeadline;

  // Tag
  const tagIds = [];
  await models.PostTag.findAll({
    where: { post_id: queryId },
    attributes: ['tag_id'],
  }).then((tags) => {
    tags.forEach((tag) => tagIds.push(tag.tag_id));
  });

  post.tags = await models.Tag.findAll({
    where: {
      id: { [Op.in]: tagIds },
    },
  });

  let tags = await models.PostTag.findAll({ where: { post_id: queryId } });
  let stringTags = '';
  await Promise.all(
    tags.map(async (tag) => {
      const queriedTag = await models.Tag.findOne({
        where: { id: tag.tag_id },
      });
      stringTags += queriedTag.name + '/';
    }),
  );
  stringTags = stringTags.slice(0, -1);

  const new_categories = res.locals.categories;
  new_categories.forEach((mainCategory) => {
    mainCategory.targetCategory = post.category_id;
    mainCategory.child_categories.forEach((childCategory) => {
      childCategory.targetCategory = post.category_id;
    });
  });

  res.locals.post = post;
  res.locals.data = req.user;
  res.locals.navItems = NAV_ITEMS[parseInt(req.user.role_id, 10) - 1];

  res.render('editor-approve', {
    cur_tags: stringTags,
    new_categories,
  });
};

controller.approve = async (req, res) => {
  const postid = req.params.id;
  const post_approver_id = req.user.id;
  const category_id = parseInt(req.body.category, 10);
  let main_category_id = await models.Category.findOne({
    where: { id: category_id },
  });
  main_category_id = main_category_id.parent_category_id ? main_category_id.parent_category_id : main_category_id.id;
  const dateParts = req.body.published_time.split('-');
  const [year, month, day] = dateParts;
  const published_time = new Date();
  published_time.setDate(day);
  published_time.setMonth(month - 1);
  published_time.setFullYear(year);

  await models.Post.update(
    { main_category_id, category_id, post_approver_id, published_time, status: 'Publish' },
    { where: { id: postid } },
  );

  await models.PostTag.destroy({ where: { post_id: postid } });

  let tags = req.body.tags.split('/');
  tags = tags.map((tag) => tag.trim());
  tags.forEach(async (tag) => {
    let queriedTag = await models.Tag.findOne({ where: { name: tag } });
    if (!queriedTag) {
      queriedTag = await models.Tag.create({ name: tag });
    }
    await models.PostTag.create({ post_id: postid, tag_id: queriedTag.id });
  });

  res.redirect(`/editors/approved`);
};

controller.reject = async (req, res) => {
  const postid = req.params.id;
  const post_approver_id = req.user.id;
  const feedback = req.body.feedback;

  await models.Post.update(
    {
      post_approver_id,
      feedback,
      status: 'Reject',
    },
    { where: { id: postid } },
  );

  res.redirect(`/editors/rejected`);
};

controller.waiting = async (req, res) => {
  res.locals.context = 'editor-waiting';

  const user = req.user;
  const targetCategory = req.user.Editor.manage_category_id;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const posts = await models.Post.findAll({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'content',
      'is_premium',
      'published_time',
      'main_category_id',
      'category_id',
      'writer_id',
      'feedback',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      status: 'Draft',
      [Op.or]: [{ category_id: targetCategory }, { main_category_id: targetCategory }],
    },
    order: [['updatedAt', 'DESC']],
  });
  res.locals.posts = posts;

  res.render('editor-list');
};

controller.approved = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const posts = await models.Post.findAll({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'content',
      'is_premium',
      'published_time',
      'main_category_id',
      'category_id',
      'writer_id',
      'post_approver_id',
      'feedback',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      status: 'Publish',
      post_approver_id: user.id,
    },
    order: [['updatedAt', 'DESC']],
  });
  res.locals.posts = posts;

  res.render('editor-list');
};

controller.rejected = async (req, res) => {
  res.locals.context = 'editor-reject';

  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const posts = await models.Post.findAll({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'content',
      'is_premium',
      'published_time',
      'main_category_id',
      'category_id',
      'writer_id',
      'post_approver_id',
      'feedback',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      status: 'Reject',
      post_approver_id: user.id,
    },
    order: [['updatedAt', 'DESC']],
  });
  res.locals.posts = posts;

  res.render('editor-list');
};

module.exports = controller;
