'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        work_email: 'ahnloo1111@gmail.com',
        telephone: '0909080807',
        user_id: 13,
      },
      {
        work_email: 'ahnloo4031@gmail.com',
        telephone: '0908090809',
        user_id: 14,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Admins', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
