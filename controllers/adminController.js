'use strict';

const controller = {};
const models = require('../models');
const sequelize = require('sequelize');
const passport = require('./passport');
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

  res.redirect(`/admin/post`);
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

  res.redirect(`/admin/post`);
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

controller.showEditPost = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);

  const post = await models.Post.findOne({ where: { id: queryId } });
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

  res.render('admin-edit-post', {
    post,
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
    TINYMCE_KEY: process.env.TINYMCE_KEY,
    tags: stringTags,
    new_categories,
  });
};

controller.editPost = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  const data = {};
  data.title = req.body.title;
  data.category_id = parseInt(req.body.category, 10);
  data.main_category_id = await models.Category.findOne({
    where: { id: data.category_id },
  });
  data.main_category_id = data.main_category_id.parent_category_id
    ? data.main_category_id.parent_category_id
    : data.main_category_id.id;
  data.summary = req.body.summary;
  data.content = req.body.mainEditor;
  data.avatar_link = req.body.avatar_link;
  data.background_image_link = req.body.avatar_link;

  const post = await models.Post.update(
    {
      title: data.title,
      category_id: data.category_id,
      main_category_id: data.main_category_id,
      summary: data.summary,
      status: 'Draft',
      content: data.content,
      avatar_link: data.avatar_link,
      background_image_link: data.background_image_link,
    },
    {
      where: { id: queryId },
    },
  );

  await models.PostTag.destroy({ where: { post_id: queryId } });

  let tags = req.body.tags.split('/');
  tags = tags.map((tag) => tag.trim());
  tags.forEach(async (tag) => {
    let queriedTag = await models.Tag.findOne({ where: { name: tag } });
    if (!queriedTag) {
      queriedTag = await models.Tag.create({ name: tag });
    }
    await models.PostTag.create({ post_id: queryId, tag_id: queriedTag.id });
  });

  res.redirect(`/admin/post`);
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
  const childCategory = await models.Category.findAll({ where: { parent_category_id: categoryId } });
  if (childCategory.length > 0) return res.redirect(`/admin/category`);

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

controller.showCreateCategory = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const parent_categories = await models.Category.findAll({
    attributes: ['id', 'name', 'parent_category_id'],
    where: {
      parent_category_id: null,
    },
  });

  res.locals.parent_categories = parent_categories;

  res.render('admin-create-category');
};

controller.createCategory = async (req, res) => {
  const category_name = req.body['category_name'];
  let parent_category_id = req.body['new-parent-category'];

  if (parseInt(parent_category_id, 10) === 0) parent_category_id = null;
  await models.Category.create({ name: category_name, parent_category_id });

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
      where: { role_id: 1, status: 'Active' },
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
      where: { role_id: 3, status: 'Active' },
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
      where: { role_id: 4, status: 'Active' },
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
      where: { role_id: 5, status: 'Active' },
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
  await models.User.update(
    { status: 'Deactived' },
    {
      where: { id: userid },
    },
  );

  res.redirect(`/admin/user`);
};

controller.premiumUser = async (req, res) => {
  const userid = req.params.id;

  const user = await models.User.findOne({ where: { id: userid, status: 'Active' } });

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

controller.showCreateUser = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];
  res.locals.navItems = navItems;

  const roles = await models.Role.findAll({
    attributes: ['id', 'name'],
    where: {
      id: { [Op.ne]: 2 },
    },
  });

  res.locals.roles = roles;

  res.render('admin-create-user');
};

controller.createUser = (req, res, next) => {
  console.log('Register');
  passport.authenticate('local-register', (err, user) => {
    if (err) return next(err);
    if (!user) return res.redirect(`/admin/editUser?username=${req.body.username}&role_id=${req.body.role}`);
    req.logIn(user, (err) => {
      if (err) return next(err);
    });
  })(req, res, next);
  console.log('Register');
};

controller.editUser = async (req, res) => {
  const username = req.query.username;
  const role_id = req.query.role_id;
  const user = await models.User.findOne({ where: { username } });
  console.log(user);
  if (role_id == 3) res.redirect(`/admin/createWriter/${user.id}`);
  if (role_id == 4) res.redirect(`/admin/createEditor/${user.id}`);
  if (role_id == 5) res.redirect(`/admin/createAdmin/${user.id}`);
};

controller.showCreateWriter = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];

  res.locals.writerId = req.params.id;
  res.locals.navItems = navItems;

  res.render('admin-create-writer');
};

controller.createWriter = async (req, res, next) => {
  const user_id = req.params.id;
  const nickname = req.body.nickname;
  const telephone = req.body.telephone;
  const work_email = req.body.email;

  await models.Writer.create({ nickname, telephone, work_email, user_id });
  await models.User.update({ role_id: 3 }, { where: { id: user_id } });

  res.redirect('/admin/user');
};

controller.showCreateEditor = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];

  res.locals.editorId = req.params.id;
  res.locals.navItems = navItems;

  res.render('admin-create-editor');
};

controller.createEditor = async (req, res, next) => {
  const user_id = req.params.id;
  const manage_category_id = req.body.category;
  const telephone = req.body.telephone;
  const work_email = req.body.email;

  await models.Editor.create({ manage_category_id, telephone, work_email, user_id });
  await models.User.update({ role_id: 4 }, { where: { id: user_id } });

  res.redirect('/admin/user');
};

controller.showCreateAdmin = async (req, res) => {
  const user = req.user;
  const navItems = NAV_ITEMS[parseInt(user.role_id, 10) - 1];

  res.locals.adminId = req.params.id;
  res.locals.navItems = navItems;

  res.render('admin-create-admin');
};

controller.createAdmin = async (req, res, next) => {
  const user_id = req.params.id;
  const telephone = req.body.telephone;
  const work_email = req.body.email;

  await models.Admin.create({ telephone, work_email, user_id });
  await models.User.update({ role_id: 5 }, { where: { id: user_id } });

  res.redirect('/admin/user');
};

module.exports = controller;
