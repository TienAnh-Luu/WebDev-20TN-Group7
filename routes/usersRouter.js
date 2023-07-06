"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const { body, validationResult } = require("express-validator");
const authController = require("../controllers/authController");
const { NAV_ITEMS } = require("../controllers/constrants");
const { getErrorMessage } = require("../controllers/validator");

router.use(authController.isLoggedIn);

router.get("/my-account", (req, res) => {
  res.render("my-account", {
    data: req.user,
    navItems: NAV_ITEMS[parseInt(req.user.role_id, 10) - 1],
  });
});

router.post(
  "/edit",
  body("nickname").trim().notEmpty().withMessage("Vui lòng nhập biệt danh"),
  (req, res, next) => {
    const message = getErrorMessage(req);
    // if (message) {
    //   // document.getElementById("alert-edit").innerText = message;
    //   return;
    // }
    next();
  },
  controller.edit
);

router.post(
  "/change-password",
  body("pwd")
    .trim()
    .notEmpty()
    .withMessage("Vui lòng nhập mật khẩu")
    .isEmail()
    .withMessage("Email không hợp lệ"),
  body("npwd").trim().notEmpty().withMessage("Vui lòng nhập mật khẩu mới"),
  body("cnpwd").custom((cnpwd, { req }) => {
    if (cnpwd != req.body.npwd)
      throw new Error("Mật khẩu xác nhận không trùng khớp");
    return true;
  }),
  (req, res, next) => {
    const message = getErrorMessage(req);
    if (message) return res.render("my-account", { editMessage: message });

    next();
  },
  controller.register
);

module.exports = router;
