"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        nickname: "Best Writer 1",
        work_email: "anhkhoavo0712@gmail.com",
        telephone: "0000000006",
        user_id: 5,
      },
      {
        nickname: "Best Writer 2",
        work_email: "anhkhoavo22222@gmail.com",
        telephone: "0000000007",
        user_id: 6,
      },
      {
        nickname: "Best Writer 3",
        work_email: "anhkhoavo33333@gmail.com",
        telephone: "0000000008",
        user_id: 7,
      },
      {
        nickname: "Best Writer 4",
        work_email: "anhkhoavo44444@gmail.com",
        telephone: "0000000009",
        user_id: 8,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Writers", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Writers", null, {});
  },
};
