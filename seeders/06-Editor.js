"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        work_email: "anhkhoavo@outlook.com",
        telephone: "0000000001",
        user_id: 9,
        manage_category_id: 1,
      },
      {
        work_email: "anhkhoavo2222@outlook.com",
        telephone: "0000000002",
        user_id: 10,
        manage_category_id: 2,
      },
      {
        work_email: "anhkhoavo3333@outlook.com",
        telephone: "0000000002",
        user_id: 11,
        manage_category_id: 3,
      },
      {
        work_email: "anhkhoavo4444@outlook.com",
        telephone: "0000000002",
        user_id: 12,
        manage_category_id: 4,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Editors", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Editors", null, {});
  },
};
