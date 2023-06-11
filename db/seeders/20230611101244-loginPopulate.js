"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("logins", [
      {
        email: "gaurav@gmail.com",
        password:
          "$2b$10$YBye02TK2zr2FTufMiOStu4USf04fVxbo4D8zqfq8UuHcIbULkdi2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("logins", null);
  },
};
