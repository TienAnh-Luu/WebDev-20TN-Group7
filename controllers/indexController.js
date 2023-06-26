"use strict";

const controller = {};
const models = require("../models");

// TODO:
// + Add feature formula
// + Rewrite 'top 10 posts' query

controller.showHomepage = async (req, res) => {
  const categories = await models.Category.findAll({
    attributes: ["id", "name", "parent_category_id"],
    where: {
      parent_category_id: null,
    },
  });
  res.locals.categories = categories;

  const latestPosts = await models.Post.findAll({
    attributes: [
      "id",
      "title",
      "avatar_link",
      "summary",
      "is_premium",
      "published_time",
      "status",
    ],
    include: [
      {
        model: models.Category,
        as: "main_category",
      },
    ],
    where: {
      status: "Published",
    },
    order: [["createdAt", "DESC"]],
    limit: 10,
  });
  res.locals.latestPosts = latestPosts;

  // fix the order follow the feature formula
  const featurePosts = await models.Post.findAll({
    attributes: [
      "id",
      "title",
      "avatar_link",
      "background_image_link",
      "summary",
      "is_premium",
      "published_time",
      "status",
    ],
    include: [
      {
        model: models.Category,
        as: "main_category",
      },
    ],
    where: {
      status: "Published",
    },
    order: [["base_rate", "DESC"]],
    limit: 16,
  });
  res.locals.featurePosts = featurePosts.slice(6);
  res.locals.carouselPosts = featurePosts.slice(0, 3);
  res.locals.anotherFeaturePosts = featurePosts.slice(3, 6);

  // bug
  const top10Posts = await models.Category.findAll({
    include: [
      {
        model: models.Post,
        attributes: [
          "id",
          "title",
          "avatar_link",
          "background_image_link",
          "summary",
          "is_premium",
          "published_time",
          "status",
          "main_category_id",
        ],
        order: [["createdAt", "DESC"]],
        limit: 1,
        where: {
          status: "Published",
          // main_category_id: { $col: "Category.id" },
        },
      },
    ],
    where: {
      parent_category_id: null,
    },
  });
  res.locals.top10Posts = latestPosts;

  console.log(top10Posts);

  const userTable = await models.User;
  const users = userTable.findAll();
  res.render("index", { users });
};

controller.showPage = (req, res, next) => {
  const pages = [
    "dashboardPage",
    "registryPage",
    "loginPage",
    "newsDetailPage",
    "newslistPage",
  ];
  if (pages.includes(req.params.page)) {
    return res.render(req.params.page);
  }
  next();
};

module.exports = controller;
