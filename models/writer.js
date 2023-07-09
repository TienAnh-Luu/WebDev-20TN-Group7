"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Writer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Writer.belongsTo(models.User, { foreignKey: "user_id", unique: true });
      Writer.hasMany(models.Post, { foreignKey: "writer_id" });
    }
  }
  Writer.init(
    {
      nickname: DataTypes.STRING,
      work_email: DataTypes.STRING,
      telephone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Writer",
    }
  );
  return Writer;
};
