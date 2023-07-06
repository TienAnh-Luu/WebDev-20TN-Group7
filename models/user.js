'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Admin, { foreignKey: 'user_id' });
      User.hasOne(models.Editor, { foreignKey: 'user_id' });
      User.hasOne(models.Writer, { foreignKey: 'user_id' });
      User.hasOne(models.Subscriber, { foreignKey: 'user_id' });
      User.belongsTo(models.Role, { foreignKey: 'role_id' });
      User.hasMany(models.Comment, { foreignKey: 'author_id' });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar_link: DataTypes.STRING,
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      premiumTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
