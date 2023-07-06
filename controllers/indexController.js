'use strict';

const controller = {};
const sequelize = require('sequelize');
const { Op } = require('sequelize');
const models = require('../models');

controller.showHomepage = async (req, res) => {
  // Feature posts in week
  const today = new Date();
  const limitDate = new Date();
  limitDate.setDate(today.getDate() - 7);
  console.log('Limit date : ' + limitDate);

  const featurePosts = await models.Post.findAll({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'background_image_link',
      'summary',
      'is_premium',
      'published_time',
      'status',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      status: 'Publish',
      published_time: {
        [Op.lte]: new Date(),
      },
      published_time: { [Op.gte]: limitDate },
    },
    order: [['view_count', 'DESC']],
    limit: 6,
  });
  res.locals.carouselPosts = featurePosts.slice(0, 3);
  res.locals.anotherFeaturePosts = featurePosts.slice(3, 6);

  // Latest posts
  const latestPosts = await models.Post.findAll({
    attributes: ['id', 'title', 'avatar_link', 'summary', 'is_premium', 'published_time', 'status'],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      status: 'Publish',
      published_time: {
        [Op.lte]: new Date(),
      },
    },
    order: [['published_time', 'DESC']],
    limit: 10,
  });
  res.locals.latestPosts = latestPosts;

  // Most view posts
  const mostViewPosts = await models.Post.findAll({
    attributes: ['id', 'title', 'avatar_link', 'summary', 'is_premium', 'published_time', 'status'],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: {
      status: 'Publish',
      published_time: {
        [Op.lte]: new Date(),
      },
    },
    order: [['view_count', 'DESC']],
    limit: 10,
  });
  res.locals.mostViewPosts = mostViewPosts;

  // Top 10 category with a post
  const top10Categories = await models.Post.findAll({
    attributes: ['main_category_id', [sequelize.literal('CAST(MAX(view_count) AS INTEGER)'), 'max_view_count']],
    where: {
      status: 'Publish',
      published_time: {
        [Op.lte]: new Date(),
      },
    },
    group: ['main_category_id'],
    limit: 10,
  });

  const top10Posts = await Promise.all(
    top10Categories.map(async (item) => {
      const post = await models.Post.findOne({
        attributes: [
          'id',
          'title',
          'avatar_link',
          'background_image_link',
          'summary',
          'is_premium',
          'published_time',
          'status',
          'main_category_id',
          'view_count',
        ],
        include: [
          {
            model: models.Category,
            as: 'main_category',
          },
        ],
        where: {
          status: 'Publish',
          published_time: {
            [Op.lte]: new Date(),
          },
          main_category_id: item.main_category_id,
          view_count: item.dataValues.max_view_count,
        },
      });

      return post;
    }),
  );
  res.locals.top10Posts = top10Posts;

  const userTable = await models.User;
  const users = userTable.findAll();
  res.render('index', { users });
};

controller.showPage = (req, res, next) => {
  const pages = ['dashboardPage', 'news-list-page', 'news-detail-page', 'login-page', 'register-page'];
  if (pages.includes(req.params.page)) {
    return res.render(req.params.page);
  }
  next();
};

module.exports = controller;
