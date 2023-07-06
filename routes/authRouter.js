'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const { body, getErrorMessage } = require('../controllers/validator');

const Recaptcha = require('express-recaptcha').RecaptchaV2;
const recaptcha = new Recaptcha('6LfSSvwmAAAAABaBtD9hSNrhg9kHuGjqG7knDvxu', '6LfSSvwmAAAAAK4kZ9M__Q110omBt1iFBA8kfs2r');
// const recaptcha = new Recaptcha('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe');
console.log(recaptcha);

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
