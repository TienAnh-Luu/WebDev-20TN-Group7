'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const { body, getErrorMessage } = require('../controllers/validator');

const Recaptcha = require('express-recaptcha').RecaptchaV2;
const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY);

router.get('/login', controller.showLogin);

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

router.get('/logout', controller.logout);

router.get('/register', controller.showRegister);

router.post(
  '/register',
  body('username').trim().notEmpty().withMessage('Vui lòng nhập tên đăng nhập'),
  body('name').trim().notEmpty().withMessage('Vui lòng nhập biệt danh'),
  body('email').trim().notEmpty().withMessage('Vui lòng nhập email').isEmail().withMessage('Email không hợp lệ'),
  body('password').trim().notEmpty().withMessage('Vui lòng nhập mật khẩu'),
  body('retypePassword').custom((retypePassword, { req }) => {
    if (retypePassword != req.body.password) throw new Error('Mật khẩu xác nhận không trùng khớp');
    return true;
  }),
  recaptcha.middleware.verify,
  (req, res, next) => {
    let message = getErrorMessage(req);
    if (req.recaptcha.error) {
      if (message === undefined) message = 'Thực hiện sai Captcha';
      else message += 'Thực hiện sai Captcha';
    }
    if (message) return res.render('register-page', { registerMessage: message });
    next();
  },
  controller.register,
);

module.exports = router;
