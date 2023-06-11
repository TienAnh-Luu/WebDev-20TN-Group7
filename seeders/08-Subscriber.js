"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        user_id: 3,
      },
      {
        user_id: 4,
      },
    ];
    items.forEach((item) => {
      item.due_time = Sequelize.literal("NOW()");
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Subscribers", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Subscribers", null, {});
  },
};
