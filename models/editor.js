"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Editor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Editor.belongsTo(models.User, { foreignKey: "user_id", unique: true });
      Editor.belongsTo(models.Category, { foreignKey: "manage_category_id" });
    }
  }
  Editor.init(
    {
      work_email: DataTypes.STRING,
      telephone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Editor",
    }
  );
  return Editor;
};
