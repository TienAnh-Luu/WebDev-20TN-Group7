"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Admin, { foreignKey: "id" });
      User.hasOne(models.Editor, { foreignKey: "id" });
      User.hasOne(models.Writer, { foreignKey: "id" });
      User.hasOne(models.Subscriber, { foreignKey: "id" });
      User.belongsTo(models.Role, { foreignKey: "role_id" });
      User.hasMany(models.Comment, { foreignKey: "author_id" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar_link: DataTypes.STRING,
      email: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
