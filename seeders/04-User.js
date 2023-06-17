"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        username: "user1",
        password: "userpwd",
        avatar_link: "https://i.pravatar.cc/200?img=1",
        email: "fox.pet.baal@gmail.com",
        name: "User 1",
        role_id: 1,
      },
      {
        username: "user2",
        password: "userpwd",
        avatar_link: "https://i.pravatar.cc/200?img=2",
        email: "fox.pet.baal.2222@gmail.com",
        name: "User 2",
        role_id: 1,
      },
      {
        username: "subscriber1",
        password: "subscriberpwd",
        avatar_link: "https://i.pravatar.cc/200?img=3",
        email: "fox.pet.baal.3333@gmail.com",
        name: "Subscriber 1",
        role_id: 2,
      },
      {
        username: "subscriber2",
        password: "subscriberpwd",
        avatar_link: "https://i.pravatar.cc/200?img=4",
        email: "fox.pet.baal.4444@gmail.com",
        name: "Subscriber 2",
        role_id: 2,
      },
      {
        username: "writer1",
        password: "writerpwd",
        avatar_link: "https://i.pravatar.cc/200?img=5",
        email: "anhkhoavo0712@gmail.com",
        name: "Writer 1",
        role_id: 3,
      },
      {
        username: "writer2",
        password: "writerpwd",
        avatar_link: "https://i.pravatar.cc/200?img=6",
        email: "anhkhoavo22222@gmail.com",
        name: "Writer 2",
        role_id: 3,
      },
      {
        username: "writer3",
        password: "writerpwd",
        avatar_link: "https://i.pravatar.cc/200?img=7",
        email: "anhkhoavo33333@gmail.com",
        name: "Writer 3",
        role_id: 3,
      },
      {
        username: "writer4",
        password: "writerpwd",
        avatar_link: "https://i.pravatar.cc/200?img=8",
        email: "anhkhoavo44444@gmail.com",
        name: "Writer 4",
        role_id: 3,
      },
      {
        username: "editor1",
        password: "editorpwd",
        avatar_link: "https://i.pravatar.cc/200?img=9",
        email: "anhkhoavo@outlook.com",
        name: "Editor 1",
        role_id: 4,
      },
      {
        username: "editor2",
        password: "editorpwd",
        avatar_link: "https://i.pravatar.cc/200?img=10",
        email: "anhkhoavo2222@outlook.com",
        name: "Editor 2",
        role_id: 4,
      },
      {
        username: "editor3",
        password: "editorpwd",
        avatar_link: "https://i.pravatar.cc/200?img=11",
        email: "anhkhoavo3333@outlook.com",
        name: "Editor 3",
        role_id: 4,
      },
      {
        username: "editor4",
        password: "editorpwd",
        avatar_link: "https://i.pravatar.cc/200?img=12",
        email: "anhkhoavo4444@outlook.com",
        name: "Editor 4",
        role_id: 4,
      },
      {
        username: "admin1",
        password: "adminpwd",
        avatar_link: "https://i.pravatar.cc/200?img=13",
        email: "ahnloo1304@gmail.com",
        name: "Admin 1",
        role_id: 5,
      },
      {
        username: "admin2",
        password: "adminpwd",
        avatar_link: "https://i.pravatar.cc/200?img=14",
        email: "ahnloo4031@gmail.com",
        name: "Admin 2",
        role_id: 5,
      },
      {
        username: "comment1",
        password: "comment",
        avatar_link: "https://i.pravatar.cc/200?img=15",
        email: "fox.pet.baal1234@gmail.com",
        name: "Commentor 1",
        role_id: 1,
      },
      {
        username: "comment2",
        password: "comment",
        avatar_link: "https://i.pravatar.cc/200?img=16",
        email: "fox.pet.baal1235@gmail.com",
        name: "Commentor 2",
        role_id: 1,
      },
      {
        username: "comment3",
        password: "comment",
        avatar_link: "https://i.pravatar.cc/200?img=17",
        email: "fox.pet.baal1236@gmail.com",
        name: "Commentor 3",
        role_id: 1,
      },
      {
        username: "comment4",
        password: "comment",
        avatar_link: "https://i.pravatar.cc/200?img=18",
        email: "fox.pet.baal1237@gmail.com",
        name: "Commentor 4",
        role_id: 1,
      },
      {
        username: "comment5",
        password: "comment",
        avatar_link: "https://i.pravatar.cc/200?img=19",
        email: "fox.pet.baal1238@gmail.com",
        name: "Commentor 5",
        role_id: 1,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Users", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
