module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT, allowNull: false },
      goal_amount: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
      collected_amount: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0 },
      status: { type: Sequelize.STRING, defaultValue: "pending" },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      main_image: {
        type: Sequelize.STRING,
      },
      department: {
        type: Sequelize.STRING,
      },
      organization_name: {
        type: Sequelize.STRING,
      },
      supportAmount: {
        type: Sequelize.FLOAT,
      },
      donorsCount: {
        type: Sequelize.INTEGER,
      },
      progress: {
        type: Sequelize.FLOAT,
      },
      isCompleted: {
        type: Sequelize.BOOLEAN,
      },
      youtubeUrl: {
        type: Sequelize.STRING,
      },
      whySupport: {
        type: Sequelize.TEXT,
      },
      photos: {
        type: Sequelize.JSONB, // يمكنك استخدام JSONB لتخزين عدة روابط صور
        allowNull: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Projects");
  },
};
