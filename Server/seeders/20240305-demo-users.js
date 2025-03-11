"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // إنشاء كلمات مرور مشفرة
    const hashedPassword1 = bcrypt.hashSync("password123", 10);
    const hashedPassword2 = bcrypt.hashSync("password456", 10);
    const hashedPassword3 = bcrypt.hashSync("password789", 10);

    // إدخال بيانات المستخدمين
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "أحمد",
        lastName: "علي",
        email: "ahmad@example.com",
        password: hashedPassword1,
        role: "donor",
        status: "approved",
        phoneNumber: "01012345678",
        idCardImage: null, // إذا كان المستخدم لم يرفع صورة الهوية بعد
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "سارة",
        lastName: "محمد",
        email: "sara@example.com",
        password: hashedPassword2,
        role: "beneficiary",
        status: "pending",
        phoneNumber: "01098765432",
        idCardImage: "path/to/id_card_image.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "خالد",
        lastName: "مصطفى",
        email: "khaled@example.com",
        password: hashedPassword3,
        role: "admin",
        status: "approved",
        phoneNumber: "01122334455",
        idCardImage: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // حذف البيانات
    await queryInterface.bulkDelete("Users", null, {});
  },
};
