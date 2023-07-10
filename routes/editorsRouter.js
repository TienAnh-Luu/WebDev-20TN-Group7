'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');
const controller = require('../controllers/editorsController');
const authController = require('../controllers/authController');
const { NAV_ITEMS } = require('../controllers/constrants');

router.use(authController.isLoggedIn);
router.use(controller.isEditor);

router.get('/info', (req, res) => {
  res.render('editor-info', {
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
});

router.get('/check/:id', controller.showCheck);

router.get('/approve/:id', controller.showApprove);
router.post('/approve/:id', controller.approve);
router.post('/reject/:id', controller.reject);

router.get('/waiting', controller.waiting);
router.get('/approved', controller.approved);
router.get('/rejected', controller.rejected);

module.exports = router;
