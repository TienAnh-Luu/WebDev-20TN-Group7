'use strict';

const helper = {};

helper.NAV_ITEMS = [
  [
    {
      icon: 'fa-solid fa-user',
      text: 'Thông tin tài khoản',
      value: 'account-info',
    },
    {
      icon: 'fa-solid fa-gem',
      text: 'Premium',
      value: 'premium',
    },
    {
      icon: 'fa-solid fa-right-from-bracket',
      text: 'Đăng xuất',
      value: 'log-out',
    },
  ],
  [],
  [
    {
      icon: 'fa-solid fa-user',
      text: 'Thông tin tài khoản',
      value: 'account-info',
    },
    {
      icon: 'fa-solid fa-newspaper',
      text: 'Thông tin phóng viên',
      value: 'writer-info',
    },
    {
      icon: 'fa-solid fa-pen-nib',
      text: 'Viết mới',
      value: 'writing',
    },
    {
      icon: 'fa-solid fa-upload',
      text: 'Bài viết đã xuất bản',
      value: 'published',
    },
    {
      icon: 'fa-solid fa-file-signature',
      text: 'Bài viết đã được duyệt',
      value: 'approved',
    },
    {
      icon: 'fa-solid fa-clock',
      text: 'Bài viết chờ duyệt',
      value: 'waiting',
    },
    {
      icon: 'fa-solid fa-ban',
      text: 'Bài viết bị từ chối',
      value: 'rejected',
    },
    {
      icon: 'fa-solid fa-right-from-bracket',
      text: 'Đăng xuất',
      value: 'log-out',
    },
  ],
  [
    {
      icon: 'fa-solid fa-user',
      text: 'Thông tin biên tập viên',
      value: 'editor-info',
    },
    {
      icon: 'fa-solid fa-newspaper',
      text: 'Bài viết chờ duyệt',
      value: 'editor-waiting',
    },
    {
      icon: 'fa-solid fa-right-from-bracket',
      text: 'Đăng xuất',
      value: 'log-out',
    },
  ],
  [
    {
      icon: 'fa-solid fa-table-cells-large',
      text: 'Quản lý chuyên mục',
      value: 'admin-category',
    },
    {
      icon: 'fa-solid fa-tag',
      text: 'Quản lý nhãn',
      value: 'admin-tag',
    },
    {
      icon: 'fa-solid fa-clipboard',
      text: 'Quản lý bài viết',
      value: 'admin-post',
    },
    {
      icon: 'fa-solid fa-user',
      text: 'Quản lý người dùng',
      value: 'admin-user',
    },
    {
      icon: 'fa-solid fa-right-from-bracket',
      text: 'Đăng xuất',
      value: 'log-out',
    },
  ],
];

module.exports = helper;
