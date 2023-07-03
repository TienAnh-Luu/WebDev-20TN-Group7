let controller = {};
const models = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.getData = async (req, res, next) => {
  const parent_categories = await models.Category.findAll({
    attributes: ["id", "name", "parent_category_id"],
    where: {
      parent_category_id: null,
    },
  });
  const child_categories = await models.Category.findAll({
    attributes: ["id", "name", "parent_category_id"],
    where: {
      parent_category_id: {
        [Op.not]: null,
      },
    },
  });
  const categories = parent_categories.map((cate) => {
    const child = child_categories.filter(
      (c) => c.parent_category_id == cate.id
    );
    // console.log(child);
    return { ...cate, child_categories: child };
  });
  res.locals.categories = categories;

  const tags = await models.Tag.findAll();
  res.locals.tags = tags;

  next();
};

controller.show = async (req, res) => {
  // Get query data
  const queryCategory = isNaN(req.query.category)
    ? 0
    : parseInt(req.query.category);
  const queryTag = isNaN(req.query.tag) ? 0 : parseInt(req.query.tag);
  const querySearch = req.query.search || "";
  const queryType = ["latest", "feature", "premium"].includes(req.query.type)
    ? req.query.type
    : "latest";

  const queryPage = isNaN(req.query.page)
    ? 1
    : Math.max(1, parseInt(req.query.page));

  const tags = await models.Tag.findAll();
  res.locals.tags = tags;

  // Filter option with query data
  const options = {
    attributes: [
      "id",
      "title",
      "avatar_link",
      "summary",
      "published_time",
      "is_premium",
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
  };

  // Query category
  if (queryCategory > 0) {
    options.where[Op.or] = [
      { category_id: queryCategory },
      { main_category_id: queryCategory },
    ];
  }

  // Query tag
  if (queryTag > 0) {
    const postIds = [];
    await models.PostTag.findAll({
      where: { tag_id: queryTag },
      attributes: ["post_id"],
    }).then((posts) => {
      posts.forEach((post) => postIds.push(post.post_id));
    });

    options.where.id = { [Op.in]: postIds };
  }

  // Query search
  // if (search.trim() != "") {
  //   options.where.name = {
  //     [Op.iLike]: `%${search}%`,
  //   };
  // }

  let headline = "";
  switch (queryType) {
    case "premium":
      headline = "Premium";
      options.order = [["createdAt", "DESC"]]; // fix this
      break;
    case "feature":
      headline = "Xem nhiều";
      options.order = [["base_rate", "DESC"]]; // fix this follow the formula
      break;
    default:
      headline = "Mới nhất";
      options.order = [["createdAt", "DESC"]];
  }

  // res.locals.sort = sort;
  // res.locals.originalUrl = removeParam("sort", req.originalUrl);
  // if (Object.keys(req.query).length == 0) {
  //   res.locals.originalUrl += "?";
  // } else {
  //   res.locals.originalUrl += "&";
  // }

  // Pagination
  const postLimit = 6;
  options.limit = postLimit;
  options.offset = postLimit * (queryPage - 1);

  const { rows, count } = await models.Post.findAndCountAll(options);

  res.locals.pagination = {
    page: queryPage,
    limit: postLimit,
    totalRows: count,
    queryParams: req.query,
  };

  res.locals.headline = headline;

  // Get originalUrl for headline link
  res.locals.originalUrl = removeParam("page", req.originalUrl);
  if (Object.keys(req.query).length == 0) {
    res.locals.originalUrl = res.locals.originalUrl + "?";
  }

  // TODO : Handle not found category, tag
  // Headline
  //// Headline for Category
  if (queryCategory > 0) {
    const categoryHeadline = {
      main: null,
      subs: [],
    };

    const queriedCategory = await models.Category.findByPk(queryCategory);
    categoryHeadline.main = queriedCategory.parent_category_id
      ? await models.Category.findByPk(queriedCategory.parent_category_id)
      : queriedCategory;
    categoryHeadline.subs = await models.Category.findAll({
      where: { parent_category_id: categoryHeadline.main.id },
    });
    res.locals.categoryHeadline = categoryHeadline;
  }

  //// Headline for Tag
  if (queryTag > 0) {
    const tagHeadline = await models.Tag.findByPk(queryTag);
    res.locals.tagHeadline = tagHeadline;
  }

  //// Headline for Search
  if (querySearch != "") {
    res.locals.searchHeadline = querySearch;
  }

  // Render
  res.locals.posts = rows;
  res.render("news-list-page");
};

controller.showDetails = async (req, res) => {
  const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  const post = await models.Post.findOne({
    attributes: [
      "id",
      "title",
      "avatar_link",
      "background_image_link",
      "content",
      "is_premium",
      "published_time",
      "main_category_id",
      "category_id",
    ],
    where: { id },
    include: [
      {
        model: models.Writer,
        attributes: ["nickname"],
      },
    ],
  });

  // Headline
  const categoryHeadline = {
    main: await models.Category.findByPk(post.main_category_id),
    subs: [await models.Category.findByPk(post.category_id)],
  };
  res.locals.categoryHeadline = categoryHeadline;

  // Comment
  post.comments = await models.Comment.findAll({
    attributes: ["id", "content", "createdAt"],
    include: [
      {
        model: models.User,
        attributes: ["name", "avatar_link"],
        include: [
          {
            model: models.Role,
            attributes: ["name"],
          },
        ],
      },
    ],
    where: {
      post_id: id,
    },
    order: [["createdAt", "DESC"]],
  });

  // Tag
  const tagIds = [];
  await models.PostTag.findAll({
    where: { post_id: id },
    attributes: ["tag_id"],
  }).then((tags) => {
    tags.forEach((tag) => tagIds.push(tag.tag_id));
  });

  post.tags = await models.Tag.findAll({
    where: {
      id: { [Op.in]: tagIds },
    },
  });

  res.locals.post = post;

  // Related Posts
  const relatedPosts = await models.Post.findAll({
    attributes: [
      "id",
      "title",
      "avatar_link",
      "summary",
      "is_premium",
      "published_time",
    ],
    include: [
      {
        model: models.Tag,
        attributes: ["id"],
        where: {
          id: { [Op.in]: tagIds },
        },
      },
      {
        model: models.Category,
        as: "main_category",
        attributes: ["id", "name"],
      },
    ],
    limit: 5,
  });
  res.locals.relatedPosts = relatedPosts;

  res.render("newsDetailPage");
};

function removeParam(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
    param,
    params_arr = [],
    queryString = sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
    params_arr = queryString.split("&");
    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
      param = params_arr[i].split("=")[0];
      if (param === key) {
        params_arr.splice(i, 1);
      }
    }
    if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
}

module.exports = controller;
