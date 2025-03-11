module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "customer",
      },
      status: {
        type: Sequelize.ENUM("pending", "approved"),
        allowNull: false,
        defaultValue: "pending", // تعيين القيمة الافتراضية للحالة
      },
      phoneNumber: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      idCardImage: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "", // يمكن أن يكون فارغًا إذا لم يتم رفع الصورة بعد
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
