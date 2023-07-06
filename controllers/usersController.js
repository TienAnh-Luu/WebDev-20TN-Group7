"use strict";

const controller = {};
const models = require("../models");

controller.edit = async (req, res) => {
  await models.User.update(
    {
      name: req.body.nickname,
    },
    {
      where: { id: req.user.id },
    }
  );

  res.redirect("/users/my-account");
};

module.exports = controller;
