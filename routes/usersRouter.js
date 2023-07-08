'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const authController = require('../controllers/authController');
const { NAV_ITEMS } = require('../controllers/constrants');

router.use(authController.isLoggedIn);

router.get('/my-account', (req, res) => {
  res.render('my-account', {
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
});

router.post('/my-account', controller.edit);

router.get('/my-premium', (req, res) => {
  res.render('my-premium', {
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
});

router.get('/extend-premium', (req, res, next) => {
  res.render('extend-premium', {
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
});

router.post('/extend-premium', controller.extendPremium);

module.exports = router;
