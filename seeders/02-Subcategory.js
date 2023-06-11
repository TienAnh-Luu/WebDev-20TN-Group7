"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      { name: "Chính trị", parent_category_id: 1 },
      { name: "Giao Thông", parent_category_id: 1 },
      { name: "Tuyển sinh", parent_category_id: 2 },
      { name: "Du học", parent_category_id: 2 },
      { name: "Học Tiếng Anh", parent_category_id: 2 },
      { name: "Nhịp sống", parent_category_id: 3 },
      { name: "Tổ ấm", parent_category_id: 3 },
      { name: "Hàng hoá", parent_category_id: 4 },
      { name: "Doanh nghiệp", parent_category_id: 4 },
      { name: "Khoa học trong nước", parent_category_id: 5 },
      { name: "Phát minh", parent_category_id: 5 },
      { name: "Điểm đến", parent_category_id: 6 },
      { name: "Ẩm thực", parent_category_id: 6 },
      { name: "Dinh dưỡng", parent_category_id: 7 },
      { name: "Khoẻ đẹp", parent_category_id: 7 },
      { name: "Công nghệ", parent_category_id: 8 },
      { name: "Sản phẩm", parent_category_id: 8 },
      { name: "Phim ảnh", parent_category_id: 9 },
      { name: "Âm nhạc", parent_category_id: 9 },
      { name: "Bóng đá", parent_category_id: 10 },
      { name: "Tennis", parent_category_id: 10 },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Categories", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
