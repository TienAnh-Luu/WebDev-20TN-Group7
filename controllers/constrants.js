'use strict';

const helper = {};

helper.NAV_ITEMS = [
  [
    {
      icon: 'fa-solid fa-user',
      text: 'Thông tin tài khoản',
      value: 'account-info',
      link: '/users/my-account',
    },
    {
      icon: 'fa-solid fa-gem',
      text: 'Premium',
      value: 'premium',
      link: '/users/my-premium',
    },
    {
      icon: 'fa-solid fa-right-from-bracket',
      text: 'Đăng xuất',
      value: 'log-out',
      link: '/users/logout',
    },
  ],
  [],
  [
    {
      icon: 'fa-solid fa-user',
      text: 'Thông tin tài khoản',
      value: 'account-info',
      link: '/users/my-account',
    },
    {
      icon: 'fa-solid fa-newspaper',
      text: 'Thông tin phóng viên',
      value: 'writer-info',
      link: '/writers/info',
    },
    {
      icon: 'fa-solid fa-pen-nib',
      text: 'Viết mới',
      value: 'writing',
      link: '/writers/write',
    },
    {
      icon: 'fa-solid fa-upload',
      text: 'Bài viết đã xuất bản',
      value: 'published',
      link: '/writers/published',
    },
    {
      icon: 'fa-solid fa-file-signature',
      text: 'Bài viết đã được duyệt',
      value: 'approved',
      link: '/writers/approved',
    },
    {
      icon: 'fa-solid fa-clock',
      text: 'Bài viết chờ duyệt',
      value: 'waiting',
      link: '/writers/waiting',
    },
    {
      icon: 'fa-solid fa-ban',
      text: 'Bài viết bị từ chối',
      value: 'rejected',
      link: '/writers/rejected',
    },
    {
      icon: 'fa-solid fa-right-from-bracket',
      text: 'Đăng xuất',
      value: 'log-out',
      link: '/users/logout',
    },
  ],
  [
    {
      icon: 'fa-solid fa-user',
      text: 'Thông tin biên tập viên',
      value: 'account-info',
      link: '/users/my-account',
    },
    {
      icon: 'fa-solid fa-newspaper',
      text: 'Thông tin biên tập viên',
      value: 'account-info',
      link: '/editors/info',
    },
    {
      icon: 'fa-solid fa-ellipsis-h',
      text: 'Bài viết chờ duyệt',
      value: 'editor-waiting',
      link: '/editors/waiting',
    },
    {
      icon: 'fa-solid fa-check',
      text: 'Bài viết đã duyệt',
      value: 'editor-waiting',
      link: '/editors/approved',
    },
    {
      icon: 'fa-solid fa-times',
      text: 'Bài viết đã từ chối',
      value: 'editor-waiting',
      link: '/editors/rejected',
    },
    {
      icon: 'fa-solid fa-right-from-bracket',
      text: 'Đăng xuất',
      value: 'log-out',
      link: '/users/logout',
    },
  ],
  [
    {
      icon: 'fa-solid fa-user',
      text: 'Thông tin',
      value: 'admin-user',
      link: '/users/my-account',
    },
    {
      icon: 'fa-solid fa-table-cells-large',
      text: 'Quản lý chuyên mục',
      value: 'admin-category',
      link: '/admin/category',
    },
    {
      icon: 'fa-solid fa-tag',
      text: 'Quản lý nhãn',
      value: 'admin-tag',
      link: '/admin/tag',
    },
    {
      icon: 'fa-solid fa-clipboard',
      text: 'Quản lý bài viết',
      value: 'admin-post',
      link: '/admin/post',
    },
    {
      icon: 'fa-solid fa-users',
      text: 'Quản lý người dùng',
      value: 'admin-user',
      link: '/admin/user',
    },
    {
      icon: 'fa-solid fa-right-from-bracket',
      text: 'Đăng xuất',
      value: 'log-out',
      link: '/users/logout',
    },
  ],
];

module.exports = helper;
