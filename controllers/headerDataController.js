let controller = {};
const models = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.getHeaderData = async (req, res, next) => {
  const queryType = req.query.type;
  const types = [
    {
      title: "MỚI NHẤT",
      link: "latest",
      isChosen: false,
    },
    {
      title: "XEM NHIỀU",
      link: "feature",
      isChosen: false,
    },
    {
      title: "PREMIUM",
      link: "premium",
      isChosen: false,
    },
  ];
  types.forEach((type) => {
    if (["feature", "latest", "premium"].includes(queryType) == true) {
      if (type.link == queryType) {
        type.isChosen = true;
      }
    }
  });
  res.locals.types = types;

  const queryType = req.query.type;
  const types = [
    {
      title: "MỚI NHẤT",
      link: "latest",
      isChosen: false,
    },
    {
      title: "XEM NHIỀU",
      link: "feature",
      isChosen: false,
    },
    {
      title: "PREMIUM",
      link: "premium",
      isChosen: false,
    },
  ];
  types.forEach((type) => {
    if (["feature", "latest", "premium"].includes(queryType) == true) {
      if (type.link == queryType) {
        type.isChosen = true;
      }
    }
  });
  res.locals.types = types;

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
    let child = child_categories.filter((c) => c.parent_category_id == cate.id);

    const queryCate = req.query.category;

    if (!isNaN(queryCate)) {
      if (cate.dataValues.id == queryCate) {
        cate.isChosen = true;
      } else {
        for (let i = 0; i < child.length; i++) {
          if (child[i].dataValues.id == queryCate) {
            cate.isChosen = true;
            break;
          }
        }
      }
    }

    return { ...cate, child_categories: child };
  });
  // console.log(categories);
  res.locals.categories = categories;

  if (next) next();
};

module.exports = controller;
