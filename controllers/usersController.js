'use strict';

const controller = {};
const models = require('../models');
const bcrypt = require('bcrypt');
const { NAV_ITEMS } = require('../controllers/constrants');

controller.edit = async (req, res) => {
  const userid = req.user.id;
  let editMessage = '';

  if (req.body['change-nickname'].trim().length > 0) {
    await models.User.update(
      {
        name: req.body['change-nickname'],
      },
      {
        where: { id: req.user.id },
      },
    );
    editMessage = 'Bạn đã đổi biệt danh thành công\n';
  }

  if (req.body['change-dob']) {
    const [year, month, day] = req.body['change-dob'].split('-');
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    await models.User.update(
      {
        dob: formattedDate,
      },
      {
        where: { id: req.user.id },
      },
    );
    editMessage += 'Bạn đã đổi ngày sinh thành công';
  }

  if (req.body['current-password']) {
    const user = await models.User.findOne({ where: { id: userid } });

    if (!bcrypt.compareSync(req.body['current-password'], user.password)) {
      editMessage = 'Đổi mật khẩu không thành công do sai mật khẩu hiện tại';
    } else {
      await models.User.update(
        {
          password: bcrypt.hashSync(req.body['new-password'], 8),
        },
        {
          where: { id: userid },
        },
      );
      editMessage = 'Bạn đã đổi mật khẩu thành công';
    }
  }

  req.user = await models.User.findOne({ where: { id: userid } });

  if (editMessage === '') editMessage = null;
  res.render('my-account', {
    editMessage: editMessage,
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
};

controller.extendPremium = async (req, res) => {
  const userid = req.user.id;
  const user = await models.User.findOne({ where: { id: userid } });
  const now = new Date();
  let currentPremiumTime = new Date();
  let newPremiumTime = new Date();

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

  req.user = await models.User.findOne({ where: { id: userid } });

  res.render('my-premium', {
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
};

controller.comment = async (req, res) => {
  const userid = req.user.id;
  const postid = req.params.id;
  const content = req.body.comment;
  await models.Comment.create({ author_id: userid, post_id: postid, content });
  res.redirect(`/posts/${postid}`);
};

module.exports = controller;
