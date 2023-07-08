'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/writersController');
const authController = require('../controllers/authController');
const { NAV_ITEMS } = require('../controllers/constrants');

router.use(authController.isLoggedIn);
router.use(controller.isWriter);

router.get('/info', (req, res) => {
  res.render('writer-info', {
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
});

router.get('/write', (req, res) => {
  res.render('writer-write', {
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
});

router.post('/write', controller.new);

module.exports = router;
