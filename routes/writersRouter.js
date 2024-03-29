'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');
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

router.post('/editNickname', controller.editNickname);

router.get('/write', (req, res) => {
  res.render('writer-write', {
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
    TINYMCE_KEY: process.env.TINYMCE_KEY,
  });
});

router.post('/write', controller.new);

router.get('/edit/:id', async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);

  const post = await models.Post.findOne({ where: { id: queryId } });
  console.log(post);
  if (post.writer_id != req.user.Writer.id) {
    res.status(404).render('error', {
      message: 'Không tìm thấy trang',
    });
  }

  let tags = await models.PostTag.findAll({ where: { post_id: queryId } });
  let stringTags = '';
  await Promise.all(
    tags.map(async (tag) => {
      const queriedTag = await models.Tag.findOne({
        where: { id: tag.tag_id },
      });
      stringTags += queriedTag.name + '/';
    }),
  );
  stringTags = stringTags.slice(0, -1);

  const new_categories = res.locals.categories;
  new_categories.forEach((mainCategory) => {
    mainCategory.targetCategory = post.category_id;
    mainCategory.child_categories.forEach((childCategory) => {
      childCategory.targetCategory = post.category_id;
    });
  });

  res.render('writer-edit', {
    post,
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
    TINYMCE_KEY: process.env.TINYMCE_KEY,
    tags: stringTags,
    new_categories,
  });
});

router.post('/edit/:id', controller.edit);

router.get('/published', controller.published);
router.get('/approved', controller.approved);
router.get('/waiting', controller.waiting);
router.get('/delete/:id', controller.delete);
router.get('/rejected', controller.rejected);

module.exports = router;
