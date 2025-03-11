"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("admin123", 10); // تشفير كلمة المرور

    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Admin",
        lastName: "User",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
        status: "approved",
        phoneNumber: "123456789",
        idCardImage: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      "Users",
      { email: "admin@example.com" },
      {}
    );
  },
};
