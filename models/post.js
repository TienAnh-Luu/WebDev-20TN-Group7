"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.hasMany(models.Comment, { foreignKey: "post_id" });
      Post.belongsToMany(models.Tag, {
        through: "PostTag",
        foreignKey: "post_id",
        otherKey: "tag_id",
      });
      Post.belongsTo(models.Category, { foreignKey: "category_id" });
      Post.belongsTo(models.Writer, { foreignKey: "writer_id" });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      avatar_link: DataTypes.STRING,
      background_image_link: DataTypes.STRING,
      summary: DataTypes.TEXT,
      content: DataTypes.TEXT,
      view_count: DataTypes.DECIMAL,
      is_premium: DataTypes.BOOLEAN,
      published_time: DataTypes.DATE,
      post_approver: DataTypes.STRING,
      status: DataTypes.STRING,
      feedback: DataTypes.TEXT,
      pdf_link: DataTypes.STRING,
      stars: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
