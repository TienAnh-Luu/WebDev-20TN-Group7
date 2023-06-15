let controller = {};
const models = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.getData = async (req, res, next) => {
  const categories = await models.Category.findAll({
    attributes: ["id", "name", "parent_category_id"],
    where: {
      parent_category_id: null,
    },
  });
  res.locals.categories = categories;

  // const brands = await models.Brand.findAll({
  //   include: [
  //     {
  //       model: models.Product,
  //     },
  //   ],
  // });
  // res.locals.brands = brands;

  const tags = await models.Tag.findAll();
  res.locals.tags = tags;

  next();
};

controller.show = async (req, res) => {
  const category = isNaN(req.query.category) ? 0 : parseInt(req.query.category);
  const tag = isNaN(req.query.tag) ? 0 : parseInt(req.query.tag);
  const keyword = req.query.keyword || "";
  // const sort = ["price", "newest", "popular"].includes(req.query.sort)
  //   ? req.query.sort
  //   : "price";
  const type = ["latest", "feature", "top10"].includes(req.query.type)
    ? req.query.type
    : "latest";
  const page = isNaN(req.query.page)
    ? 1
    : Math.max(1, parseInt(req.query.page));

  // const categories = await models.Category.findAll({
  //   attributes: ["id", "name", "parent_category_id"],
  //   where: {
  //     parent_category_id: null,
  //   },
  // });
  // res.locals.categories = categories;

  const tags = await models.Tag.findAll();
  res.locals.tags = tags;

  const options = {
    attributes: [
      "id",
      "title",
      "avatar_link",
      "summary",
      "published_time",
      "is_premium",
    ],
    include: [
      {
        model: models.Category,
        as: "main_category",
      },
    ],
    where: {},
  };
  if (category > 0) {
    // options.where["$or"] = [
    //   { category_id: category },
    //   { main_category_id: category },
    // ];
    options.where.main_category_id = category; // this should be SELECT ... FROM ... WHERE category_id = category OR main_category_id = category
  }
  // if (tag > 0) {
  //   options.include = [
  //     {
  //       model: models.Tag,
  //       where: { id: tag },
  //     },
  //   ];
  // }
  // if (keyword.trim() != "") {
  //   options.where.name = {
  //     [Op.iLike]: `%${keyword}%`,
  //   };
  // }
  switch (type) {
    case "premium":
      options.order = [["createdAt", "DESC"]]; // fix this
      break;
    case "feature":
      options.order = [["base_rate", "DESC"]]; // fix this follow the formula
      break;
    default:
      options.order = [["createdAt", "DESC"]];
  }

  // res.locals.sort = sort;
  // res.locals.originalUrl = removeParam("sort", req.originalUrl);
  // if (Object.keys(req.query).length == 0) {
  //   res.locals.originalUrl += "?";
  // } else {
  //   res.locals.originalUrl += "&";
  // }

  const limit = 6;
  options.limit = limit;
  options.offset = limit + (page - 1);
  const { rows, count } = await models.Post.findAndCountAll(options);

  res.locals.pagination = {
    page,
    limit,
    totalRows: count,
    queryParams: res.query,
  };

  // const products = await models.Product.findAll(options);
  res.locals.posts = rows;
  res.render("newslistPage");
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
    ],
    where: { id },
    include: [
      {
        model: models.Writer,
        attributes: ["nickname"],
      },
      {
        model: models.Comment,
        attributes: ["id", "content", "stars", "createdAt"],
        include: [
          {
            model: models.User,
            attributes: ["name"],
          },
        ],
      },
      {
        model: models.Tag,
        attributes: ["id", "name"],
      },
    ],
  });

  res.locals.post = post;

  let tagIds = [];
  post.Tags.forEach((tag) => tagIds.push(tag.id));

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
        model: models.Category,
        as: "main_category",
      },
    ],
    include: [
      {
        model: models.Tag,
        attributes: ["id"],
        where: {
          id: { [Op.in]: tagIds },
        },
      },
    ],
    limit: 6,
  });
  res.locals.relatedPosts = relatedPosts;

  console.log(post);

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
