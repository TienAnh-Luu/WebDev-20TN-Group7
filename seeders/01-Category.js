"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      { name: "Thời sự" },
      { name: "Giáo dục" },
      { name: "Đời sống" },
      { name: "Kinh doanh" },
      { name: "Khoa học" },
      { name: "Du lịch" },
      { name: "Sức khoẻ" },
      { name: "Số học" },
      { name: "Giải trí" },
      { name: "Thể thao" },
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
