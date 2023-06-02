"use strict";

const controller = {};
const models = require("../models");

controller.showHomepage = async (req, res) => {
  const latestPosts = await models.Post.findAll({
    attributes: [
      "id",
      "title",
      "avatar_link",
      "background_image_link",
      "summary",
      "is_premium",
      "published_time",
    ],
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
    ],
    order: [["base_rate", "DESC"]],
    limit: 16,
  });
  res.locals.featurePosts = featurePosts;
  res.locals.carouselPosts = featurePosts.slice(10, 13);
  res.locals.anotherFeaturePosts = featurePosts.slice(13, 16);

  const categories = await models.Category.findAll();
  res.locals.categoryArray = categories;

  const userTable = await models.User;
  const users = userTable.findAll();
  res.render("index", { users });
};

controller.showPage = (req, res, next) => {
  const pages = [
    "cart",
    "checkout",
    "contact",
    "login",
    "my-account",
    "product-detail",
    "product-list",
    "wishlist",
  ];
  if (pages.includes(req.params.page)) {
    return res.render(req.params.page);
  }
  next();
};

module.exports = controller;
