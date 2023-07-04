'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const { body, getErrorMessage } = require('../controllers/validator');

router.get('/login', controller.show);
router.post(
  '/login',
  body('username').trim().notEmpty().withMessage('Vui lòng nhập tên đăng nhập'),
  body('password').trim().notEmpty().withMessage('Vui lòng nhập mật khẩu'),
  (req, res, next) => {
    const message = getErrorMessage(req);
    if (message) return res.render('login-page', { loginMessage: message });

    next();
  },
  controller.login,
);

module.exports = router;
