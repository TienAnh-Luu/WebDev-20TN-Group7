"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subscriber.belongsTo(models.User, {
        foreignKey: "user_id",
        unique: true,
      });
    }
  }
  Subscriber.init(
    {
      due_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Subscriber",
    }
  );
  return Subscriber;
};
