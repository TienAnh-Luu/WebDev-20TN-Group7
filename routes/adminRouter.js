'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');
const { body, getErrorMessage } = require('../controllers/validator');
const controller = require('../controllers/adminController');
const authController = require('../controllers/authController');
const { NAV_ITEMS } = require('../controllers/constrants');

router.use(authController.isLoggedIn);
router.use(controller.isAdmin);

router.get('/post', controller.post);

router.get('/check/:id', controller.showCheck);

router.post('/approve/:id', controller.approve);
router.post('/reject/:id', controller.reject);
router.get('/deletePost/:id', controller.deletePost);
router.get('/premiumPost/:id', controller.premiumPost);

router.get('/editPost/:id', controller.showEditPost);
router.post('/editPost/:id', controller.editPost);

router.get('/tag', controller.tag);
router.post('/editTag/:id', controller.editTag);
router.get('/deleteTag/:id', controller.deleteTag);

router.get('/category', controller.category);
router.post('/editCategory/:id', controller.editCategory);
router.get('/deleteCategory/:id', controller.deleteCategory);
router.get('/upCategory/:id', controller.upCategory);
router.get('/downCategory/:id', controller.showDownCategory);
router.post('/downCategory/:id', controller.downCategory);
router.get('/createCategory', controller.showCreateCategory);
router.post('/createCategory', controller.createCategory);

router.get('/user', controller.user);
router.get('/deleteUser/:id', controller.deleteUser);
router.get('/premiumUser/:id', controller.premiumUser);
router.get('/editorCategory/:id', controller.editorCategory);
router.post('/editorCategory/:id', controller.changeEditorCategory);
router.get('/createUser', controller.showCreateUser);
router.post(
  '/createUser',
  body('username').trim().notEmpty().withMessage('Vui lòng nhập tên đăng nhập'),
  body('name').trim().notEmpty().withMessage('Vui lòng nhập biệt danh'),
  body('email').trim().notEmpty().withMessage('Vui lòng nhập email').isEmail().withMessage('Email không hợp lệ'),
  body('password').trim().notEmpty().withMessage('Vui lòng nhập mật khẩu'),
  body('retypePassword').custom((retypePassword, { req }) => {
    if (retypePassword != req.body.password) throw new Error('Mật khẩu xác nhận không trùng khớp');
    return true;
  }),
  (req, res, next) => {
    let message = getErrorMessage(req);
    if (message)
      return res.render('admin-create-user', {
        data: req.user,
        navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
        registerMessage: message,
      });
    next();
  },
  controller.createUser,
);
router.get('/editUser', controller.editUser);
router.get('/createWriter/:id', controller.showCreateWriter);
router.post('/createWriter/:id', controller.createWriter);
router.get('/createEditor/:id', controller.showCreateEditor);
router.post('/createEditor/:id', controller.createEditor);
router.get('/createAdmin/:id', controller.showCreateAdmin);
router.post('/createAdmin/:id', controller.createAdmin);

module.exports = router;
