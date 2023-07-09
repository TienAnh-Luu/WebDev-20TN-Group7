'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const models = require('../models');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userid, done) => {
  try {
    const user = await models.User.findOne({
      attributes: ['id', 'username', 'email', 'name', 'avatar_link', 'role_id', 'premiumTime'],
      where: { id: userid },
    });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  'local-login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      if (username) {
        username = username.toLowerCase();
      }

      try {
        // Not login yet
        if (!req.user) {
          const user = await models.User.findOne({ where: { username, status: 'Active' } });

          // Not register yet
          if (!user) {
            return done(null, false, req.flash('loginMessage', 'Tài khoản không tồn tại'));
          }

          // Wrong password
          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, req.flash('loginMessage', 'Mật khẩu không đúng'));
          }

          // Finish Login
          return done(null, user);
        }

        // Logined
        done(null, req.user);
      } catch (err) {
        done(error);
      }
    },
  ),
);

passport.use(
  'local-register',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      if (username) username = username.toLowerCase();
      let email;
      if (req.body.email) email = req.body.email.toLowerCase();
      if (req.user && req.user.role_id != 5) return done(null, req.user);

      try {
        let user = await models.User.findOne({ where: { username } });
        if (user)
          return done(
            null,
            false,
            req.flash('registeredMessage', 'Tạo tài khoản không thành công.\nTên đăng nhập đã được dùng'),
          );

        user = await models.User.findOne({ where: { email: email } });
        if (user)
          return done(
            null,
            false,
            req.flash('registeredMessage', 'Tạo tài khoản không thành công.\nEmail đã được dùng'),
          );

        // Create new user
        user = await models.User.create({
          username: username,
          email: email,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(8)),
          name: req.body.name,
          role_id: 1,
          status: 'Active',
          avatar_link: 'https://i.pravatar.cc/200',
        });

        done(
          null,
          false,
          req.flash('finishRegisterMessage', 'Bạn đã đăng ký thành công và có thể đăng nhập để sử dụng'),
        );
      } catch (err) {
        done(err);
      }
    },
  ),
);

module.exports = passport;
