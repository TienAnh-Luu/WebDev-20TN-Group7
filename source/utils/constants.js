export const HIGHLIGHT_TYPE = {
  LATEST: 'MỚI NHẤT',
  MOST_VIEWED: 'XEM NHIỀU',
  TOP10: 'TOP 10 CHUYÊN MỤC',
};

export const NAV_ITEM = {
  user: [
    {
      icon: 'fa-solid fa-user',
      text: 'Thông tin tài khoản',
      value: 'user-info',
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
