'use strict';

const controller = {};
const passport = require('./passport');
const models = require('../models');

controller.showLogin = (req, res) => {
  if (req.isAuthenticated()) return res.redirect('/');

  res.render('login-page', {
    loginMessage: req.flash('loginMessage'),
    reqUrl: req.query.reqUrl,
  });
};

controller.login = (req, res, next) => {
  const keepSignedIn = req.body.keepSignedIn;
  const reqUrl = req.body.reqUrl ? req.body.reqUrl : '/users/my-account';

  passport.authenticate('local-login', (err, user) => {
    if (err) return next(err);
    if (!user) return res.redirect(`/users/login?reqUrl=${reqUrl}`);

    req.logIn(user, (err) => {
      if (err) return next(err);
      req.session.cookie.maxAge = keepSignedIn ? 24 * 60 * 60 * 1000 : null;
      return res.redirect(reqUrl);
    });
  })(req, res, next);
};

controller.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  res.redirect(`/users/login?reqUrl=${req.originalUrl}`);
};

controller.showRegister = (req, res) => {
  if (req.isAuthenticated()) return res.redirect('/');

  res.render('register-page', {
    registerMessage: req.flash('registerMessage'),
    reqUrl: req.query.reqUrl,
  });
};

controller.register = (req, res, next) => {
  const reqUrl = req.body.reqUrl ? req.body.reqUrl : '/users/my-account';

  passport.authenticate('local-register', (err, user) => {
    if (err) return next(err);
    if (!user) return res.redirect(`/users/login?reqUrl=${reqUrl}`);
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.redirect(reqUrl);
    });
  })(req, res, next);
};

module.exports = controller;
