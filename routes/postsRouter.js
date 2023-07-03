"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/postsController");
const headerDataController = require("../controllers/headerDataController");

router.get("/", headerDataController.getHeaderData, controller.show);
router.get("/:id", headerDataController.getHeaderData, controller.showDetails);

module.exports = router;
