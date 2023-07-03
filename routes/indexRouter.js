"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/indexController");
const headerDataController = require("../controllers/headerDataController");

router.get("/createTables", (req, res) => {
  const models = require("../models");
  models.sequelize.sync().then(() => {
    res.send("tables created!");
  });
});

router.get("/", headerDataController.getHeaderData, controller.showHomepage);

module.exports = router;
