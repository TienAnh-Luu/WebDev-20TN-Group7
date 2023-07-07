'use strict';

const controller = {};
const models = require('../models');
const bcrypt = require('bcrypt');
const { NAV_ITEMS } = require('../controllers/constrants');

controller.edit = async (req, res) => {
  const userid = req.user.id;
  let editMessage;

  console.log(req.body['change-nickname']);
  console.log(req.body['current-password']);

  if (req.body['change-nickname']) {
    await models.User.update(
      {
        name: req.body['change-nickname'],
      },
      {
        where: { id: req.user.id },
      },
    );
    editMessage = 'Bạn đã đổi biệt danh thành công';
  } else if (req.body['current-password']) {
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

  res.render('my-account', {
    editMessage: editMessage,
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
};

module.exports = controller;
