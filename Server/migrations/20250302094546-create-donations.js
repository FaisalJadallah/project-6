// migration file: create-donations.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('donations', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
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
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        beneficiaryOrg: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        projectName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        projectId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        amount: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        cardNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        expiryDate: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ccv: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('donations');
    },
  };
  