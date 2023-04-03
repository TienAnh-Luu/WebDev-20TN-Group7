export const HIGHLIGHT_TYPE = {
  LATEST: 0,
  MOST_VIEWED: 1,
  TOP10: 2,
};

export const CONTEXT = {
  PUBLISHED: 3,
  APPROVED: 4,
  WAITING: 5,
  REJECTED: 6,
  HOMEPAGE: 7,
};

export const NAV_ITEM = {
  user: [
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
  writer: [
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
};
