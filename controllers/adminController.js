'use strict';

const controller = {};
const models = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { NAV_ITEMS } = require('../controllers/constrants');

controller.isAdmin = async (req, res, next) => {
  if (req.user.role_id === 5) {
    req.user = await models.User.findOne({
      attributes: ['id', 'username', 'email', 'name', 'avatar_link', 'role_id', 'premiumTime'],
      include: [
        {
          model: models.Admin,
          attributes: ['id', 'work_email', 'telephone'],
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

controller.post = async (req, res) => {
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
      'status',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
      {
        model: models.Category,
        as: 'category',
      },
      {
        model: models.Writer,
      },
    ],
    order: [['updatedAt', 'DESC']],
  });
  res.locals.posts = posts;

  res.render('admin-post-list');
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
  res.render('admin-check');
};

controller.approve = async (req, res) => {
  const postid = req.params.id;
  const post_approver_id = req.user.id;
  const dateParts = req.body.published_time.split('-');
  const [year, month, day] = dateParts;
  const published_time = new Date();
  published_time.setDate(day);
  published_time.setMonth(month - 1);
  published_time.setFullYear(year);

  await models.Post.update(
    {
      post_approver_id,
      published_time,
      status: 'Publish',
    },
    { where: { id: postid } },
  );

  res.redirect(`/posts/${postid}/preview`);
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

  res.redirect(`/posts/${postid}/preview`);
};

controller.deletePost = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  if (queryId > 0) {
    await models.Post.update(
      {
        status: 'Delete',
      },
      {
        where: { id: queryId },
      },
    );
  }
  res.redirect('/admin/post');
};

controller.premiumPost = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  if (queryId > 0) {
    await models.Post.update(
      {
        is_premium: true,
      },
      {
        where: { id: queryId },
      },
    );
  }
  res.redirect('/admin/post');
};

controller.tag = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const tags = await models.Tag.findAll({
    order: [['updatedAt', 'DESC']],
  });
  res.locals.tags = tags;

  res.render('admin-tag-list');
};

controller.editTag = async (req, res) => {
  const tagid = req.params.id;
  const new_tag = req.body.new_tag;

  await models.Tag.update(
    {
      name: new_tag,
    },
    { where: { id: tagid } },
  );

  res.redirect(`/admin/tag`);
};

controller.deleteTag = async (req, res) => {
  const tagid = req.params.id;

  await models.Tag.destroy({ where: { id: tagid } });

  res.redirect(`/admin/tag`);
};

module.exports = controller;
