'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');
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

router.get('/tag', controller.tag);
router.post('/editTag/:id', controller.editTag);
router.get('/deleteTag/:id', controller.deleteTag);

router.get('/category', controller.category);
router.post('/editCategory/:id', controller.editCategory);
router.get('/deleteCategory/:id', controller.deleteCategory);
router.get('/upCategory/:id', controller.upCategory);
router.get('/downCategory/:id', controller.showDownCategory);
router.post('/downCategory/:id', controller.downCategory);

router.get('/user', controller.user);
router.get('/deleteUser/:id', controller.deleteUser);
router.get('/premiumUser/:id', controller.premiumUser);
router.get('/editorCategory/:id', controller.editorCategory);
router.post('/editorCategory/:id', controller.changeEditorCategory);

module.exports = router;
