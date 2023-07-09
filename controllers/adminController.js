'use strict';

const controller = {};
const models = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { NAV_ITEMS } = require('../controllers/constrants');

controller.isAdmin = async (req, res, next) => {
  if (req.user.role_id === 5) {
    req.user = await models.User.findOne({
      attributes: ['id', 'username', 'email', 'name', 'avatar_link', 'role_id', 'premiumTime'],
      include: [
        {
          model: models.Admin,
          attributes: ['id', 'work_email', 'telephone'],
        },
      ],
      where: { id: req.user.id },
    });
    return next();
  }

  res.status(404).render('error', {
    message: 'Không tìm thấy trang',
  });
};

controller.post = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const posts = await models.Post.findAll({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'content',
      'is_premium',
      'published_time',
      'main_category_id',
      'category_id',
      'writer_id',
      'feedback',
      'status',
    ],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
      {
        model: models.Category,
        as: 'category',
      },
      {
        model: models.Writer,
      },
    ],
    order: [['updatedAt', 'DESC']],
  });
  res.locals.posts = posts;

  res.render('admin-post-list');
};

controller.showCheck = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  const post = await models.Post.findOne({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'background_image_link',
      'content',
      'is_premium',
      'published_time',
      'main_category_id',
      'category_id',
      'updatedAt',
      'status',
    ],
    where: { id: queryId },
    include: [
      {
        model: models.Writer,
        attributes: ['nickname'],
      },
    ],
  });

  // Headline
  const categoryHeadline = {};
  categoryHeadline.main = await models.Category.findByPk(post.main_category_id);
  if (post.main_category_id != post.category_id)
    categoryHeadline.subs = [await models.Category.findByPk(post.category_id)];
  res.locals.categoryHeadline = categoryHeadline;

  // Tag
  const tagIds = [];
  await models.PostTag.findAll({
    where: { post_id: queryId },
    attributes: ['tag_id'],
  }).then((tags) => {
    tags.forEach((tag) => tagIds.push(tag.tag_id));
  });

  post.tags = await models.Tag.findAll({
    where: {
      id: { [Op.in]: tagIds },
    },
  });

  res.locals.post = post;
  res.locals.data = req.user;
  res.locals.navItems = NAV_ITEMS[parseInt(req.user.role_id, 10) - 1];
  res.render('admin-check');
};

controller.approve = async (req, res) => {
  const postid = req.params.id;
  const post_approver_id = req.user.id;
  const dateParts = req.body.published_time.split('-');
  const [year, month, day] = dateParts;
  const published_time = new Date();
  published_time.setDate(day);
  published_time.setMonth(month - 1);
  published_time.setFullYear(year);

  await models.Post.update(
    {
      post_approver_id,
      published_time,
      status: 'Publish',
    },
    { where: { id: postid } },
  );

  res.redirect(`/posts/${postid}/preview`);
};

controller.reject = async (req, res) => {
  const postid = req.params.id;
  const post_approver_id = req.user.id;
  const feedback = req.body.feedback;

  await models.Post.update(
    {
      post_approver_id,
      feedback,
      status: 'Reject',
    },
    { where: { id: postid } },
  );

  res.redirect(`/posts/${postid}/preview`);
};

controller.deletePost = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  if (queryId > 0) {
    await models.Post.update(
      {
        status: 'Delete',
      },
      {
        where: { id: queryId },
      },
    );
  }
  res.redirect('/admin/post');
};

controller.premiumPost = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  if (queryId > 0) {
    await models.Post.update(
      {
        is_premium: true,
      },
      {
        where: { id: queryId },
      },
    );
  }
  res.redirect('/admin/post');
};

controller.tag = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const tags = await models.Tag.findAll({
    order: [['updatedAt', 'DESC']],
  });
  res.locals.tags = tags;

  res.render('admin-tag-list');
};

controller.editTag = async (req, res) => {
  const tagid = req.params.id;
  const new_tag = req.body.new_tag;

  await models.Tag.update(
    {
      name: new_tag,
    },
    { where: { id: tagid } },
  );

  res.redirect(`/admin/tag`);
};

controller.deleteTag = async (req, res) => {
  const tagid = req.params.id;

  await models.Tag.destroy({ where: { id: tagid } });

  res.redirect(`/admin/tag`);
};

controller.category = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  let cur_categories = await models.Category.findAll({
    order: [['updatedAt', 'DESC']],
  });

  await Promise.all(
    cur_categories.map(async (category) => {
      if (category.parent_category_id) {
        const parent_category = await models.Category.findOne({
          where: { id: category.parent_category_id },
        });
        category.parent_category_name = parent_category.name;
      }
    }),
  );
  res.locals.cur_categories = cur_categories;

  res.render('admin-category-list');
};

controller.editCategory = async (req, res) => {
  const categoryId = req.params.id;
  const new_category = req.body.new_category;

  await models.Category.update(
    {
      name: new_category,
    },
    { where: { id: categoryId } },
  );

  const parent_categories = await models.Category.findAll({
    attributes: ['id', 'name', 'parent_category_id'],
    where: {
      parent_category_id: null,
    },
  });
  const child_categories = await models.Category.findAll({
    attributes: ['id', 'name', 'parent_category_id'],
    where: {
      parent_category_id: {
        [Op.not]: null,
      },
    },
  });
  const categories = parent_categories.map((cate) => {
    let child = child_categories.filter((c) => c.parent_category_id == cate.id);

    const queryCate = req.query.category;

    if (!isNaN(queryCate)) {
      if (cate.dataValues.id == queryCate) {
        cate.isChosen = true;
      } else {
        for (let i = 0; i < child.length; i++) {
          if (child[i].dataValues.id == queryCate) {
            cate.isChosen = true;
            break;
          }
        }
      }
    }

    return { ...cate, child_categories: child };
  });
  res.locals.categories = categories;

  res.redirect(`/admin/category`);
};

controller.deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  const queriedCategory = await models.Category.findOne({ where: { id: categoryId } });
  if (!queriedCategory.parent_category_id) return res.redirect(`/admin/category`);

  await models.Post.update({ category_id: queriedCategory.parent_category_id }, { where: { category_id: categoryId } });
  await models.Category.destroy({ where: { id: categoryId } });

  const parent_categories = await models.Category.findAll({
    attributes: ['id', 'name', 'parent_category_id'],
    where: {
      parent_category_id: null,
    },
  });
  const child_categories = await models.Category.findAll({
    attributes: ['id', 'name', 'parent_category_id'],
    where: {
      parent_category_id: {
        [Op.not]: null,
      },
    },
  });
  const categories = parent_categories.map((cate) => {
    let child = child_categories.filter((c) => c.parent_category_id == cate.id);

    const queryCate = req.query.category;

    if (!isNaN(queryCate)) {
      if (cate.dataValues.id == queryCate) {
        cate.isChosen = true;
      } else {
        for (let i = 0; i < child.length; i++) {
          if (child[i].dataValues.id == queryCate) {
            cate.isChosen = true;
            break;
          }
        }
      }
    }

    return { ...cate, child_categories: child };
  });
  res.locals.categories = categories;

  res.redirect(`/admin/category`);
};

controller.upCategory = async (req, res) => {
  const categoryId = req.params.id;
  await models.Category.update({ parent_category_id: null }, { where: { id: categoryId } });
  await models.Post.update({ main_category_id: categoryId }, { where: { category_id: categoryId } });

  const parent_categories = await models.Category.findAll({
    attributes: ['id', 'name', 'parent_category_id'],
    where: {
      parent_category_id: null,
    },
  });
  const child_categories = await models.Category.findAll({
    attributes: ['id', 'name', 'parent_category_id'],
    where: {
      parent_category_id: {
        [Op.not]: null,
      },
    },
  });
  const categories = parent_categories.map((cate) => {
    let child = child_categories.filter((c) => c.parent_category_id == cate.id);

    const queryCate = req.query.category;

    if (!isNaN(queryCate)) {
      if (cate.dataValues.id == queryCate) {
        cate.isChosen = true;
      } else {
        for (let i = 0; i < child.length; i++) {
          if (child[i].dataValues.id == queryCate) {
            cate.isChosen = true;
            break;
          }
        }
      }
    }

    return { ...cate, child_categories: child };
  });
  res.locals.categories = categories;

  res.redirect(`/admin/category`);
};

controller.showDownCategory = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const categoryId = req.params.id;
  const children = await models.Category.findAll({
    where: { parent_category_id: categoryId },
  });
  console.log(children);
  if (children.length > 0) {
    console.log('Has child');
    return res.redirect(`/admin/category`);
  }

  res.locals.downCategoryId = categoryId;

  const main_categories = await models.Category.findAll({
    where: {
      parent_category_id: null,
      id: {
        [Op.ne]: categoryId,
      },
    },
  });
  res.locals.main_categories = main_categories;

  res.render(`admin-down-category`);
};

controller.downCategory = async (req, res) => {
  const categoryId = req.params.id;
  const parentCategoryId = req.body['new-parent-category'];

  await models.Post.update({ main_category_id: parentCategoryId }, { where: { category_id: categoryId } });
  await models.Category.update({ parent_category_id: parentCategoryId }, { where: { id: categoryId } });

  const parent_categories = await models.Category.findAll({
    attributes: ['id', 'name', 'parent_category_id'],
    where: {
      parent_category_id: null,
    },
  });
  const child_categories = await models.Category.findAll({
    attributes: ['id', 'name', 'parent_category_id'],
    where: {
      parent_category_id: {
        [Op.not]: null,
      },
    },
  });
  const categories = parent_categories.map((cate) => {
    let child = child_categories.filter((c) => c.parent_category_id == cate.id);

    const queryCate = req.query.category;

    if (!isNaN(queryCate)) {
      if (cate.dataValues.id == queryCate) {
        cate.isChosen = true;
      } else {
        for (let i = 0; i < child.length; i++) {
          if (child[i].dataValues.id == queryCate) {
            cate.isChosen = true;
            break;
          }
        }
      }
    }

    return { ...cate, child_categories: child };
  });
  res.locals.categories = categories;

  res.redirect(`/admin/category`);
};

controller.user = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  let users = [];

  users.push(
    ...(await models.User.findAll({
      attributes: ['id', 'username', 'email', 'name', 'avatar_link', 'role_id', 'premiumTime'],
      include: [
        {
          model: models.Role,
        },
      ],
      where: { role_id: 1 },
    })),
  );

  users.push(
    ...(await models.User.findAll({
      attributes: ['id', 'username', 'email', 'name', 'avatar_link', 'role_id', 'premiumTime'],
      include: [
        {
          model: models.Writer,
        },
        {
          model: models.Role,
        },
      ],
      where: { role_id: 3 },
    })),
  );

  users.push(
    ...(await models.User.findAll({
      attributes: ['id', 'username', 'email', 'name', 'avatar_link', 'role_id', 'premiumTime'],
      include: [
        {
          model: models.Editor,
          include: [
            {
              model: models.Category,
            },
          ],
        },
        {
          model: models.Role,
        },
      ],
      where: { role_id: 4 },
    })),
  );

  users.push(
    ...(await models.User.findAll({
      attributes: ['id', 'username', 'email', 'name', 'avatar_link', 'role_id', 'premiumTime'],
      include: [
        {
          model: models.Admin,
        },
        {
          model: models.Role,
        },
      ],
      where: { role_id: 5 },
    })),
  );

  users.sort((user1, user2) => {
    if (user1.role_id === user2.role_id) {
      return user1.id - user2.id;
    } else {
      return user1.role_id - user2.role_id;
    }
  });

  res.locals.users = users;

  res.render('admin-user-list');
};

controller.deleteUser = async (req, res) => {
  const userid = req.params.id;
  await models.User.destroy({
    where: { id: userid },
  });

  res.redirect(`/admin/user`);
};

controller.premiumUser = async (req, res) => {
  const userid = req.params.id;

  const user = await models.User.findOne({ where: { id: userid } });

  const now = new Date();
  let currentPremiumTime = new Date();
  let newPremiumTime = new Date();

  console.log(user.premiumTime instanceof Date);

  if (user.premiumTime < now) {
    currentPremiumTime = now;
  } else {
    currentPremiumTime = user.premiumTime;
  }
  newPremiumTime.setDate(currentPremiumTime.getDate() + 7);

  await models.User.update(
    {
      premiumTime: newPremiumTime,
    },
    {
      where: { id: userid },
    },
  );

  res.redirect(`/admin/user`);
};

controller.editorCategory = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  res.locals.editorUserId = req.params.id;

  res.render('admin-editor-category');
};

controller.changeEditorCategory = async (req, res) => {
  const userId = req.params.id;
  await models.Editor.update({ manage_category_id: req.body.category }, { where: { user_id: userId } });

  res.redirect(`/admin/user`);
};

module.exports = controller;
