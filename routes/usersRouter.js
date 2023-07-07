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

module.exports = router;
