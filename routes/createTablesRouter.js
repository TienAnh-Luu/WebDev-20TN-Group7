'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.get('/createTables', (req, res) => {
  const models = require('../models');
  models.sequelize.sync().then(() => {
    res.send('tables created!');
  });
});

module.exports = router;
