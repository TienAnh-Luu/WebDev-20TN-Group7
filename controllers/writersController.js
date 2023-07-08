"use strict";

const controller = {};
const models = require("../models");
const { NAV_ITEMS } = require("../controllers/constrants");

controller.isWriter = async (req, res, next) => {
  if (req.user.role_id === 3) {
    req.user = await models.User.findOne({
      attributes: [
        "id",
        "username",
        "email",
        "name",
        "avatar_link",
        "role_id",
        "premiumTime",
      ],
      include: [
        {
          model: models.Writer,
          attributes: ["id", "nickname", "work_email", "telephone"],
        },
      ],
      where: { id: req.user.id },
    });
    return next();
  }

  res.status(404).render("error", {
    message: "Không tìm thấy trang",
  });
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
  data.status = "Draft";
  data.avatar_link = req.body.avatar_link;
  data.background_image_link = req.body.avatar_link;

  const post = await models.Post.create(data);
  console.log(post.id);

  let tags = req.body.tags.split("/");
  tags = tags.map((tag) => tag.trim());
  tags.forEach(async (tag) => {
    let queriedTag = await models.Tag.findOne({ where: { name: tag } });
    if (!queriedTag) {
      queriedTag = await models.Tag.create({ name: tag });
    }
    await models.PostTag.create({ post_id: post.id, tag_id: queriedTag.id });
  });

  res.redirect(`/posts/${post.id}/preview`);
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
  data.status = "Draft";
  data.avatar_link = req.body.avatar_link;
  data.background_image_link = req.body.avatar_link;

  const post = await models.Post.update(
    {
      title: data.title,
      category_id: data.category_id,
      main_category_id: data.main_category_id,
      summary: data.summary,
      content: data.content,
      status: data.status,
      avatar_link: data.avatar_link,
      background_image_link: data.background_image_link,
    },
    {
      where: { id: queryId },
    }
  );

  await models.PostTag.destroy({ where: { post_id: queryId } });

  let tags = req.body.tags.split("/");
  tags = tags.map((tag) => tag.trim());
  tags.forEach(async (tag) => {
    let queriedTag = await models.Tag.findOne({ where: { name: tag } });
    if (!queriedTag) {
      queriedTag = await models.Tag.create({ name: tag });
    }
    await models.PostTag.create({ post_id: queryId, tag_id: queriedTag.id });
  });

  res.redirect(`/posts/${queryId}/preview`);
};

controller.published = async (req, res) => {
  res.locals.context = "published";

  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const posts = await models.Post.findAll({
    attributes: [
      "id",
      "title",
      "avatar_link",
      "content",
      "is_premium",
      "published_time",
      "main_category_id",
      "category_id",
      "writer_id",
    ],
    include: [
      {
        model: models.Category,
        as: "main_category",
      },
    ],
    where: {
      writer_id: user.Writer.id,
      status: "Publish",
    },
  });
  res.locals.posts = posts;

  res.render("writer-list");
};

controller.approved = async (req, res) => {
  res.locals.context = "approved";

  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const posts = await models.Post.findAll({
    attributes: [
      "id",
      "title",
      "avatar_link",
      "content",
      "is_premium",
      "published_time",
      "main_category_id",
      "category_id",
      "writer_id",
    ],
    include: [
      {
        model: models.Category,
        as: "main_category",
      },
    ],
    where: {
      writer_id: user.Writer.id,
      status: "Approve",
    },
  });
  res.locals.posts = posts;

  res.render("writer-list");
};

controller.waiting = async (req, res) => {
  res.locals.context = "waiting";

  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const posts = await models.Post.findAll({
    attributes: [
      "id",
      "title",
      "avatar_link",
      "content",
      "is_premium",
      "published_time",
      "main_category_id",
      "category_id",
      "writer_id",
    ],
    include: [
      {
        model: models.Category,
        as: "main_category",
      },
    ],
    where: {
      writer_id: user.Writer.id,
      status: "Waiting",
    },
  });
  res.locals.posts = posts;

  res.render("writer-list");
};

controller.rejected = async (req, res) => {
  res.locals.context = "rejected";

  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const posts = await models.Post.findAll({
    attributes: [
      "id",
      "title",
      "avatar_link",
      "content",
      "is_premium",
      "published_time",
      "main_category_id",
      "category_id",
      "writer_id",
    ],
    include: [
      {
        model: models.Category,
        as: "main_category",
      },
    ],
    where: {
      writer_id: user.Writer.id,
      status: "Reject",
    },
  });
  res.locals.posts = posts;

  res.render("writer-list");
};

controller.delete = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  if (queryId > 0) {
    await models.Post.update(
      {
        status: "Delete",
      },
      {
        where: { id: req.params.id },
      }
    );
  }
  res.redirect("users/my-account");
};

module.exports = controller;

// User {
//   dataValues: {
//     id: 5,
//     username: 'writer1',
//     email: 'anhkhoavo0712@gmail.com',
//     name: 'Writer1',
//     avatar_link: 'https://i.pravatar.cc/200?img=5',
//     role_id: 3,
//     premiumTime: 2023-07-06T15:12:20.838Z,
//     Writer: Writer {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     }
//   },
