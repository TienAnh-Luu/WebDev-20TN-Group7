"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        name: "AI",
      },
      {
        name: "Andree",
      },
      {
        name: "Apple",
      },
      {
        name: "Apple Vision Pro",
      },
      {
        name: "Australia",
      },
      {
        name: "Avengers",
      },
      {
        name: "BRay",
      },
      {
        name: "Bard",
      },
      {
        name: "Big Daddy",
      },
      {
        name: "ByteDance",
      },
      {
        name: "Bộ Khoa học và Công nghệ",
      },
      {
        name: "Bộ trưởng Huỳnh Thành Đạt",
      },
      {
        name: "Bộ trưởng Phạm Thị Thanh Trà",
      },
      {
        name: "Champions League",
      },
      {
        name: "ChatGPT",
      },
      {
        name: "Chris Hemsworth",
      },
      {
        name: "Cristiano Ronaldo",
      },
      {
        name: "Công ty Nippi",
      },
      {
        name: "Dinh 2 Đà Lạt",
      },
      {
        name: "Dinh thự Bảo Đại",
      },
      {
        name: "Du lịch Hà Nội",
      },
      {
        name: "Du lịch TP HCM",
      },
      {
        name: "Dự án BOT",
      },
      {
        name: "FPT",
      },
      {
        name: "FPT IS",
      },
      {
        name: "FPT Software AI Residency",
      },
      {
        name: "FPT.IDCheck",
      },
      {
        name: "Giao thông TP HCM",
      },
      {
        name: "Gladiator 2",
      },
      {
        name: "Google",
      },
      {
        name: "Google Bard",
      },
      {
        name: "Grab Việt Nam",
      },
      {
        name: "Grand Slam",
      },
      {
        name: "Gạo",
      },
      {
        name: "H'Hen Niê",
      },
      {
        name: "HLV Hong Kong",
      },
      {
        name: "HUST",
      },
      {
        name: "Haddad Maia",
      },
      {
        name: "Hanchu Việt Nam",
      },
      {
        name: "Hoài Lâm",
      },
      {
        name: "Hà Nội",
      },
      {
        name: "Học tiếng Anh",
      },
      {
        name: "Hội An",
      },
      {
        name: "Ibrahimovic",
      },
      {
        name: "Indonesia",
      },
      {
        name: "Inter Milan",
      },
      {
        name: "Jorn Andersen",
      },
      {
        name: "JustaTee",
      },
      {
        name: "Karik",
      },
      {
        name: "Katleen Phan Võ",
      },
      {
        name: "Kinh tế Việt Nam",
      },
      {
        name: "Lionel Messi",
      },
      {
        name: "Lý Hoàng Nam",
      },
      {
        name: "Lật mặt 6",
      },
      {
        name: "Manchester City",
      },
      {
        name: "Mark Zuckerberg",
      },
      {
        name: "Masan",
      },
      {
        name: "Mastercard",
      },
      {
        name: "Meta",
      },
      {
        name: "Metro số 1",
      },
      {
        name: "Michael Bay",
      },
      {
        name: "Michael Udebuluzor",
      },
      {
        name: "Michelin Guide 2023",
      },
      {
        name: "Michelin Guide Việt Nam",
      },
      {
        name: "Mila",
      },
      {
        name: "Miliket",
      },
      {
        name: "Moonwalker",
      },
      {
        name: "Mỹ",
      },
      {
        name: "Nguyễn Minh Cường",
      },
      {
        name: "Nhà bà Nữ",
      },
      {
        name: "Nippi Collagen 100",
      },
      {
        name: "Novak Djokovic",
      },
      {
        name: "Nấu ăn cho em",
      },
      {
        name: "Olivoilà Extra Virgin",
      },
      {
        name: "Olivoilà Pomace",
      },
      {
        name: "OpenAI",
      },
      {
        name: "Pep Guardiola",
      },
      {
        name: "Philippines",
      },
      {
        name: "Pháp",
      },
      {
        name: "Phú Quý",
      },
      {
        name: "Quy Nhơn",
      },
      {
        name: "Quảng Nam",
      },
      {
        name: "Quốc hội",
      },
      {
        name: "Rap Việt",
      },
      {
        name: "Rap Việt mùa 3",
      },
      {
        name: "Roland Garros",
      },
      {
        name: "Ruud",
      },
      {
        name: "SAP S/4HANA",
      },
      {
        name: "SAT",
      },
      {
        name: "Shift Robotics",
      },
      {
        name: "Steven Caple Jr.",
      },
      {
        name: "Suboi",
      },
      {
        name: "Swiatek",
      },
      {
        name: "Sầu riêng",
      },
      {
        name: "THPT chuyên Ngoại ngữ",
      },
      {
        name: "TP HCM",
      },
      {
        name: "Thái VG",
      },
      {
        name: "Thùy Tiên",
      },
      {
        name: "Thương mại điện tử",
      },
      {
        name: "Thổ Nhĩ Kỳ",
      },
      {
        name: "Thủ tướng Phạm Minh Chính",
      },
      {
        name: "TikTok",
      },
      {
        name: "TikTok Shop",
      },
      {
        name: "Transformers 7",
      },
      {
        name: "Transformers: Rise of the Beasts",
      },
      {
        name: "Trinity College",
      },
      {
        name: "Trung Quốc",
      },
      {
        name: "Trà mãng cầu",
      },
      {
        name: "Trấn Thành",
      },
      {
        name: "Tổng bí thư Nguyễn Phú Trọng",
      },
      {
        name: "VNeID",
      },
      {
        name: "Vidiva",
      },
      {
        name: "Vietbank",
      },
      {
        name: "Vietjet",
      },
      {
        name: "VinWonders",
      },
      {
        name: "Vina T&T",
      },
      {
        name: "Vinatech Group",
      },
      {
        name: "Vision Pro",
      },
      {
        name: "Việt Nam",
      },
      {
        name: "VssID",
      },
      {
        name: "Vui chơi Phú Quốc",
      },
      {
        name: "Vui chơi Đà Lạt",
      },
      {
        name: "Wyndham Garden Phú Quốc",
      },
      {
        name: "Wyndham Grand",
      },
      {
        name: "Wyndham Hotel & Resorts",
      },
      {
        name: "Xuất khẩu Việt Nam",
      },
      {
        name: "Zlatan Ibrahimovic",
      },
      {
        name: "akaBot",
      },
      {
        name: "bách khoa hà nội",
      },
      {
        name: "bánh mì",
      },
      {
        name: "bánh mì Việt Nam",
      },
      {
        name: "báo động",
      },
      {
        name: "béo phì",
      },
      {
        name: "bê tông thông minh",
      },
      {
        name: "bảo hiểm xã hội",
      },
      {
        name: "bắn cung",
      },
      {
        name: "bổ sung nước",
      },
      {
        name: "bức tranh xuất khẩu",
      },
      {
        name: "cao tốc Bắc Nam",
      },
      {
        name: "cao tốc TP HCM - Trung Lương",
      },
      {
        name: "chuyển động",
      },
      {
        name: "chăm sóc da",
      },
      {
        name: "chất vấn",
      },
      {
        name: "chứng chỉ IELTS",
      },
      {
        name: "cánh tay robot",
      },
      {
        name: "công nghệ in 3D",
      },
      {
        name: "công ty Hệ thống Thông tin FPT",
      },
      {
        name: "cơ học",
      },
      {
        name: "cơn sốt trà mãng cầu",
      },
      {
        name: "cưỡi ngựa",
      },
      {
        name: "cấp ẩm",
      },
      {
        name: "cầu Thủ Thiêm 4",
      },
      {
        name: "cắt điện",
      },
      {
        name: "dinh dưỡng",
      },
      {
        name: "du học Australia",
      },
      {
        name: "du học Mỹ",
      },
      {
        name: "du học Trung Quốc",
      },
      {
        name: "du lịch",
      },
      {
        name: "du lịch Quy Nhơn",
      },
      {
        name: "du lịch Đà Lạt",
      },
      {
        name: "dầu ô liu",
      },
      {
        name: "gan nhiễm mỡ",
      },
      {
        name: "gia đình",
      },
      {
        name: "giao thông Hà Nội",
      },
      {
        name: "giao thông TP HCM",
      },
      {
        name: "giày",
      },
      {
        name: "giày đi bộ",
      },
      {
        name: "giày đi bộ nhanh nhất",
      },
      {
        name: "giải M25 Jakarta 2023",
      },
      {
        name: "giảm cân",
      },
      {
        name: "gạo xuất khẩu",
      },
      {
        name: "hip hop",
      },
      {
        name: "học từ vựng",
      },
      {
        name: "hợp tác",
      },
      {
        name: "iOS 17",
      },
      {
        name: "iPadOS 17",
      },
      {
        name: "iPhone 8",
      },
      {
        name: "iPhone X",
      },
      {
        name: "in 3D",
      },
      {
        name: "khoa học công nghệ",
      },
      {
        name: "khoe của",
      },
      {
        name: "khu đô thị Thủ Thiêm",
      },
      {
        name: "kính thực tế ảo",
      },
      {
        name: "lọc nước",
      },
      {
        name: "máy tính lượng tử",
      },
      {
        name: "mãng cầu xiêm",
      },
      {
        name: "mùa hè",
      },
      {
        name: "mất điện",
      },
      {
        name: "mắt kính cho người khiếm thính",
      },
      {
        name: "mắt kính thông minh",
      },
      {
        name: "nghiện game",
      },
      {
        name: "nguồn lực cho khoa học công nghệ",
      },
      {
        name: "ngành Y",
      },
      {
        name: "ngày Quốc tế Yoga",
      },
      {
        name: "ngân hàng",
      },
      {
        name: "người Hà Nội",
      },
      {
        name: "người Nhật",
      },
      {
        name: "người giàu",
      },
      {
        name: "người giàu có",
      },
      {
        name: "nhà từ in 3D",
      },
      {
        name: "nhà đầu tư",
      },
      {
        name: "nuôi dạy con",
      },
      {
        name: "năng lượng mặt trời",
      },
      {
        name: "nắng nóng",
      },
      {
        name: "nỗi khổ",
      },
      {
        name: "nữ đại biểu Quốc hội",
      },
      {
        name: "phong cách sống",
      },
      {
        name: "phương án tuyển sinh 2023",
      },
      {
        name: "phương án tuyển sinh đại học",
      },
      {
        name: "phụ nữ Việt Nam",
      },
      {
        name: "quy hoạch TP HCM",
      },
      {
        name: "quạt chống nóng",
      },
      {
        name: "quạt tích điện",
      },
      {
        name: "quạt điều hòa",
      },
      {
        name: "quả vải",
      },
      {
        name: "quản trị nguồn lực doanh nghiệp",
      },
      {
        name: "quần vợt",
      },
      {
        name: "rap",
      },
      {
        name: "robot",
      },
      {
        name: "robot điều khiển bằng cử chỉ",
      },
      {
        name: "sinh viên làm cánh tay robot",
      },
      {
        name: "siêu giàu",
      },
      {
        name: "siêu máy tính",
      },
      {
        name: "siêu vật liệu",
      },
      {
        name: "suy gan",
      },
      {
        name: "sáng chế",
      },
      {
        name: "sản xuất điện",
      },
      {
        name: "sầu riêng Tại Hải Nam",
      },
      {
        name: "sầu riêng trồng ở Trung Quốc",
      },
      {
        name: "sống khỏe",
      },
      {
        name: "sợi chỉ",
      },
      {
        name: "sữa",
      },
      {
        name: "tennis",
      },
      {
        name: "thanh toán EMV Open-loop",
      },
      {
        name: "thi đánh giá năng lực",
      },
      {
        name: "thi đánh giá tư duy",
      },
      {
        name: "thiết bị",
      },
      {
        name: "thiết bị dò khí độc",
      },
      {
        name: "thua lỗ",
      },
      {
        name: "thú chơi",
      },
      {
        name: "thượng lưu",
      },
      {
        name: "thầy Quang Nguyen",
      },
      {
        name: "thời trang",
      },
      {
        name: "thủ khoa",
      },
      {
        name: "thừa kế",
      },
      {
        name: "tim mạch",
      },
      {
        name: "tin học trẻ",
      },
      {
        name: "tiết kiệm điện",
      },
      {
        name: "trường quân đội",
      },
      {
        name: "tuyển sinh đại học",
      },
      {
        name: "tuyển sinh đại học 2023",
      },
      {
        name: "tắc đường",
      },
      {
        name: "tắc đường Hà Nội",
      },
      {
        name: "tắc đường TP HCM",
      },
      {
        name: "từ vựng tiếng Anh",
      },
      {
        name: "việt nam - australia",
      },
      {
        name: "vé xe bus",
      },
      {
        name: "vải Bắc Giang",
      },
      {
        name: "vải Lục Ngạn",
      },
      {
        name: "vải thiều",
      },
      {
        name: "vải thiều giá rẻ",
      },
      {
        name: "vẽ đường cong",
      },
      {
        name: "xe buýt Sài Gòn",
      },
      {
        name: "xuất khẩu",
      },
      {
        name: "xét tuyển ngành Y",
      },
      {
        name: "xơ gan",
      },
      {
        name: "ăn cay",
      },
      {
        name: "Đen Vâu",
      },
      {
        name: "Điện",
      },
      {
        name: "Điện ảnh Việt",
      },
      {
        name: "Đà Nẵng",
      },
      {
        name: "Đại học Bách khoa Hà Nội",
      },
      {
        name: "Đại học Melbourne",
      },
      {
        name: "Đại học Quốc gia TP HCM",
      },
      {
        name: "Đỉnh núi Everest",
      },
      {
        name: "Đội tuyển Hong Kong",
      },
      {
        name: "Đức",
      },
      {
        name: "điện năng",
      },
      {
        name: "đường bay Việt Nam - Ấn Độ",
      },
      {
        name: "đề thi đánh giá tư duy",
      },
      {
        name: "đồ tối giản",
      },
      {
        name: "đội tuyển Việt Nam",
      },
      {
        name: "Ẩm thực Hà Nội",
      },
      {
        name: "Ẩm thực Sài Gòn",
      },
      {
        name: "ẩm thực",
      },
      {
        name: "ẩm thực Hà Nội",
      },
      {
        name: "ẩm thực Nhật Bản",
      },
      {
        name: "ẩm thực đường phố",
      },
      {
        name: "Ứng dụng Trung Quốc",
      },
      {
        name: "ứng dụng bảo hiểm xã hội",
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Tags", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tags", null, {});
  },
};
