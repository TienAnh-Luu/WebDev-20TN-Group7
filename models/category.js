"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Post, { foreignKey: "category_id" });
      Category.hasMany(models.Editor, { foreignKey: "manage_category_id" });
      Category.hasMany(Category, {
        as: "children",
        foreignKey: "parent_category_id",
      });
      Category.belongsTo(Category, {
        as: "parent",
        foreignKey: "parent_category_id",
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
