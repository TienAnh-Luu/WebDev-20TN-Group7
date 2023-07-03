let controller = {};
const models = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

controller.getHeaderData = async (req, res, next) => {
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

  if (next) next();
};

module.exports = controller;
