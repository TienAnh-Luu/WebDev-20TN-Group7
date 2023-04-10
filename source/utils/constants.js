export const CONTEXT = {
  PREMIUM: -1,
  LATEST: 0,
  MOST_VIEWED: 1,
  TOP10: 2,
  PUBLISHED: 3,
  APPROVED: 4,
  WAITING: 5,
  REJECTED: 6,
  HOMEPAGE: 7,
};

export const CATEGORY = {
  NEWS: {
    id: 8,
    label: 'Thời sự',
    subs: {
      local: {
        id: 9,
        label: 'Trong nước',
      },
      international: {
        id: 10,
        label: 'Quốc tế',
      },
    },
  },
  SOCIAL: {
    id: 11,
    label: 'Xã hội',
    subs: {
      events: {
        id: 12,
        label: 'Sự kiện',
      },
      crime: {
        id: 13,
        label: 'Tội phạm',
      },
    },
  },
  LAW: {
    id: 14,
    label: 'Pháp luật',
    subs: {
      advice: {
        id: 15,
        label: 'Tư vấn',
      },
      juridical: {
        id: 16,
        label: 'Pháp lý',
      },
    },
  },
  EDUCATION: {
    id: 17,
    label: 'Giáo dục',
    subs: {
      admission: {
        id: 18,
        label: 'Tuyển sinh',
      },
      studyAbroad: {
        id: 19,
        label: 'Du học',
      },
    },
  },
  BUSINESS: {
    id: 20,
    label: 'Kinh doanh',
    subs: {
      financial: {
        id: 21,
        label: 'Tài chính',
      },
      enterprise: {
        id: 22,
        label: 'Doanh nghiệp',
      },
    },
  },
  HEALTH: {
    id: 23,
    label: 'Sức khỏe',
    subs: {
      nutrition: {
        id: 24,
        label: 'Dinh dưỡng',
      },
      infant: {
        id: 25,
        label: 'Mẹ & bé',
      },
    },
  },
  CULTURE: {
    id: 26,
    label: 'Văn hóa',
    subs: {
      character: {
        id: 27,
        label: 'Nhân vật',
      },
      book: {
        id: 28,
        label: 'Sách',
      },
    },
  },
  SPORT: {
    id: 29,
    label: 'Thể thao',
    subs: {
      football: {
        id: 30,
        label: 'Bóng đá',
      },
      eSport: {
        id: 31,
        label: 'E-Sport',
      },
    },
  },
  TECHNOLOGY: {
    id: 32,
    label: 'Công nghệ',
    subs: {
      digitalConversion: {
        id: 33,
        label: 'Chuyển đổi số',
      },
      device: {
        id: 34,
        label: 'Thiết bị',
      },
    },
  },
  TRAVEL: {
    id: 35,
    label: 'Du lịch',
    subs: {
      trip: {
        id: 36,
        label: 'Đi chơi',
      },
      tip: {
        id: 37,
        label: 'Mách bạn',
      },
    },
  },
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

// forgot password stages
export const FP_STAGE = {
  ENTER_EMAIL: 0,
  ENTER_OTP: 1,
  ENTER_PASSWORD: 2,
};
