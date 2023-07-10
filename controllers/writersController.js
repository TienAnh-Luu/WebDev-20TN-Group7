'use strict';

const controller = {};
const models = require('../models');
const { NAV_ITEMS } = require('../controllers/constrants');
const sequelize = require('sequelize');
const Op = sequelize.Op;

controller.isWriter = async (req, res, next) => {
  if (req.user.role_id === 3) {
    req.user = await models.User.findOne({
      attributes: ['id', 'username', 'email', 'name', 'avatar_link', 'role_id', 'premiumTime'],
      include: [
        {
          model: models.Writer,
          attributes: ['id', 'nickname', 'work_email', 'telephone'],
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

controller.editNickname = async (req, res) => {
  const user_id = req.user.id;
  const nickname = req.body['change-nickname'];
  console.log(nickname);
  await models.Writer.update({ nickname }, { where: { user_id } });
  return res.redirect('/writers/info');
};

controller.new = async (req, res) => {
  const data = {};
  data.title = req.body.title;
  data.category_id = parseInt(req.body.category, 10);
  data.main_category_id = await models.Category.findOne({
    where: { id: data.category_id },
  });
  data.main_category_id = data.main_category_id.parent_category_id
    ? data.main_category_id.parent_category_id
    : data.main_category_id.id;
  data.summary = req.body.summary;
  data.content = req.body.mainEditor;
  data.writer_id = req.user.Writer.id;
  data.is_premium = false;
  data.status = 'Draft';
  data.avatar_link = req.body.avatar_link;
  data.background_image_link = req.body.avatar_link;

  const post = await models.Post.create(data);
  console.log(post.id);

  let tags = req.body.tags.split('/');
  tags = tags.map((tag) => tag.trim());
  tags.forEach(async (tag) => {
    let queriedTag = await models.Tag.findOne({ where: { name: tag } });
    if (!queriedTag) {
      queriedTag = await models.Tag.create({ name: tag });
    }
    await models.PostTag.create({ post_id: post.id, tag_id: queriedTag.id });
  });

  res.redirect(`/writers/waiting`);
};

controller.edit = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  const data = {};
  data.title = req.body.title;
  data.category_id = parseInt(req.body.category, 10);
  data.main_category_id = await models.Category.findOne({
    where: { id: data.category_id },
  });
  data.main_category_id = data.main_category_id.parent_category_id
    ? data.main_category_id.parent_category_id
    : data.main_category_id.id;
  data.summary = req.body.summary;
  data.content = req.body.mainEditor;
  data.avatar_link = req.body.avatar_link;
  data.background_image_link = req.body.avatar_link;

  const post = await models.Post.update(
    {
      title: data.title,
      category_id: data.category_id,
      main_category_id: data.main_category_id,
      summary: data.summary,
      status: 'Draft',
      content: data.content,
      avatar_link: data.avatar_link,
      background_image_link: data.background_image_link,
    },
    {
      where: { id: queryId },
    },
  );

  await models.PostTag.destroy({ where: { post_id: queryId } });

  let tags = req.body.tags.split('/');
  tags = tags.map((tag) => tag.trim());
  tags.forEach(async (tag) => {
    let queriedTag = await models.Tag.findOne({ where: { name: tag } });
    if (!queriedTag) {
      queriedTag = await models.Tag.create({ name: tag });
    }
    await models.PostTag.create({ post_id: queryId, tag_id: queriedTag.id });
  });

  res.redirect(`/writers/waiting`);
};

controller.published = async (req, res) => {
  res.locals.context = 'published';

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
      'feedback',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      writer_id: user.Writer.id,
      status: 'Publish',
      published_time: {
        [Op.lte]: new Date(),
      },
    },
    order: [['updatedAt', 'DESC']],
  });
  res.locals.posts = posts;

  res.render('writer-list');
};

controller.approved = async (req, res) => {
  res.locals.context = 'approved';

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
      'feedback',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      writer_id: user.Writer.id,
      status: 'Publish',
      published_time: {
        [Op.gt]: new Date(),
      },
    },
    order: [['updatedAt', 'DESC']],
  });
  res.locals.posts = posts;

  res.render('writer-list');
};

controller.waiting = async (req, res) => {
  res.locals.context = 'waiting';

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
      'feedback',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      writer_id: user.Writer.id,
      status: 'Draft',
    },
    order: [['updatedAt', 'DESC']],
  });
  res.locals.posts = posts;

  res.render('writer-list');
};

controller.rejected = async (req, res) => {
  res.locals.context = 'rejected';

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
      'feedback',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      writer_id: user.Writer.id,
      status: 'Reject',
    },
    order: [['updatedAt', 'DESC']],
  });
  res.locals.posts = posts;

  res.render('writer-list');
};

controller.delete = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  if (queryId > 0) {
    await models.Post.update(
      {
        status: 'Delete',
      },
      {
        where: { id: queryId, writer_id: req.user.Writer.id },
      },
    );
  }
  res.redirect('users/my-account');
};

module.exports = controller;
