"use strict";
const { User } = require("../models"); // تأكد من استيراد نموذج المستخدم

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // جلب جميع المستخدمين من قاعدة البيانات
      const users = await User.findAll({ attributes: ["id"] });

      if (!users || users.length === 0) {
        console.error(
          "⚠️ لا يوجد مستخدمون في قاعدة البيانات! تأكد من تشغيل Seeder المستخدمين أولًا."
        );
        return;
      }

      return queryInterface.bulkInsert("Projects", [
        {
          name: "مشروع تعليمي",
          description: "مشروع يهدف إلى تحسين التعليم في المناطق الريفية.",
          goal_amount: 5000.0,
          collected_amount: 1500.0,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
          main_image: "path/to/image.jpg",
          department: "التعليم",
          organization_name: "منظمة التعليم الجيد",
          supportAmount: 200.0,
          donorsCount: 3,
          progress: 30.0,
          isCompleted: false,
          youtubeUrl: "https://www.youtube.com/watch?v=example",
          whySupport: "هذا المشروع يدعم الأطفال في المناطق النائية.",
          photos: JSON.stringify(["path/to/photo1.jpg", "path/to/photo2.jpg"]),
          user_id: users[0].id, // ربط المشروع بالمستخدم الأول
        },
        {
          name: "مشروع بيئي",
          description: "مشروع يهدف إلى الحفاظ على البيئة.",
          goal_amount: 10000.0,
          collected_amount: 4000.0,
          status: "approved",
          createdAt: new Date(),
          updatedAt: new Date(),
          main_image: "path/to/environment_image.jpg",
          department: "البيئة",
          organization_name: "منظمة البيئة المستدامة",
          supportAmount: 500.0,
          donorsCount: 5,
          progress: 40.0,
          isCompleted: false,
          youtubeUrl: "https://www.youtube.com/watch?v=example2",
          whySupport: "المشروع يساعد في الحفاظ على الحياة البرية.",
          photos: JSON.stringify(["path/to/photo3.jpg", "path/to/photo4.jpg"]),
          user_id: users[1] ? users[1].id : users[0].id, // تأكد من وجود مستخدم ثانٍ
        },
        {
          name: "مشروع دعم المستشفيات",
          description: "توفير معدات طبية حديثة للمستشفيات العامة",
          goal_amount: 20000.0,
          collected_amount: 5000.0,
          status: "completed",
          createdAt: new Date(),
          updatedAt: new Date(),
          main_image: "image3.jpg",
          department: "الصحة",
          organization_name: "مؤسسة الرعاية الصحية",
          supportAmount: 10000.0,
          donorsCount: 50,
          progress: 100.0,
          isCompleted: true,
          youtubeUrl: "https://youtu.be/example3",
          whySupport: "لتحسين مستوى الرعاية الصحية في المستشفيات.",
          photos: JSON.stringify(["hospital1.jpg", "hospital2.jpg"]),
          user_id: users[2] ? users[2].id : users[0].id, // تأكد من وجود مستخدم ثالث
        },
      ]);
    } catch (error) {
      console.error("❌ خطأ أثناء جلب المستخدمين:", error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Projects", null, {});
  },
};
