let controller = {};
const models = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.getData = async (req, res, next) => {
  const categories = await models.Category.findAll({
    include: [
      {
        model: models.Post,
      },
    ],
  });
  res.locals.categories = categories;

  const brands = await models.Brand.findAll({
    include: [
      {
        model: models.Product,
      },
    ],
  });
  res.locals.brands = brands;

  const tags = await models.Tag.findAll();
  res.locals.tags = tags;

  next();
};

controller.show = async (req, res) => {
  const parent_category = isNaN(req.query.parent_category)
    ? 0
    : parseInt(req.query.parent_category);
  const tag = isNaN(req.query.tag) ? 0 : parseInt(req.query.tag);
  const keyword = req.query.keyword || "";
  const sort = ["price", "newest", "popular"].includes(req.query.sort)
    ? req.query.sort
    : "price";
  const page = isNaN(req.query.page)
    ? 1
    : Math.max(1, parseInt(req.query.page));

  const categories = await models.Category.findAll({
    include: [
      {
        model: models.Product,
      },
    ],
  });
  res.locals.categories = categories;

  const tags = await models.Tag.findAll();
  res.locals.tags = tags;

  const options = {
    attributes: [
      "id",
      "title",
      "avatar_link",
      "summary",
      "published_time",
      "isPremium",
    ],
    where: {},
  };
  if (parent_category > 0) {
    options.where.parent_category = parent_category;
  }
  if (tag > 0) {
    options.include = [
      {
        model: models.Tag,
        where: { id: tag },
      },
    ];
  }
  if (keyword.trim() != "") {
    options.where.name = {
      [Op.iLike]: `%${keyword}%`,
    };
  }
  switch (sort) {
    case "newest":
      options.order = [["createdAt", "DESC"]];
      break;
    case "popular":
      options.order = [["stars", "DESC"]];
      break;
    default:
      options.order = [["price", "ASC"]];
  }

  res.locals.sort = sort;
  res.locals.originalUrl = removeParam("sort", req.originalUrl);
  if (Object.keys(req.query).length == 0) {
    res.locals.originalUrl += "?";
  } else {
    res.locals.originalUrl += "&";
  }

  const limit = 6;
  options.limit = limit;
  options.offset = limit + (page - 1);
  const { rows, count } = await models.Product.findAndCountAll(options);

  res.locals.pagination = {
    page,
    limit,
    totalRows: count,
    queryParams: res.query,
  };

  // const products = await models.Product.findAll(options);
  res.locals.posts = rows;
  res.render("posts-list");
};

controller.showDetails = async (req, res) => {
  const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  const product = await models.Product.findOne({
    attributes: [
      "id",
      "name",
      "stars",
      "oldPrice",
      "price",
      "summary",
      "description",
      "specification",
    ],
    where: { id },
    include: [
      {
        model: models.Image,
        attributes: ["name", "imagePath"],
      },
      {
        model: models.Review,
        attributes: ["id", "review", "stars", "createdAt"],
        include: [
          {
            model: models.User,
            attributes: ["firstName", "lastName"],
          },
        ],
      },
      {
        model: models.Tag,
        attributes: ["id"],
      },
    ],
  });

  res.locals.product = product;

  let tagIds = [];
  product.Tags.forEach((tag) => tagIds.push(tag.id));

  const relatedProducts = await models.Product.findAll({
    attributes: ["id", "name", "imagePath", "oldPrice", "price"],
    include: [
      {
        model: models.Tag,
        attributes: ["id"],
        where: {
          id: { [Op.in]: tagIds },
        },
      },
    ],
    limit: 10,
  });
  res.locals.relatedProducts = relatedProducts;

  res.render("product-detail");
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
