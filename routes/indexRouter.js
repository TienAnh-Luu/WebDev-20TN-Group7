'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.get('/', controller.showHomepage);
router.get('/test', (req, res) => {
  res.render('test');
});

router.post('/test', (req, res) => {
  console.log(req.body);
});

module.exports = router;
