module.exports = (sequelize, DataTypes) => {
    const Donation = sequelize.define('Donation', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      beneficiaryOrg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiryDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ccv: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: "donations",
      timestamps: true,  // تأكد من أن `timestamps` مفعلة
    });
  
    Donation.associate = function (models) {
      Donation.belongsTo(models.User, { foreignKey: 'userId' });
    };
  
    return Donation;
  };
  