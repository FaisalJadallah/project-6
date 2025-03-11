module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    id: {
      type: DataTypes.INTEGER, // Fixed typo: INTEGER instead of INTEGER
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    goal_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    collected_amount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    main_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    organization_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    supportAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,

    },
    donorsCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,

    },
    progress: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,

    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,

    },
    youtubeUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    whySupport: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "now not used",
    },
    photos: {
      type: DataTypes.JSONB, // تخزين عدة روابط للصور بصيغة JSON
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users", // Ensure this matches the table name for the User model
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  });

  // Define the association with the User model
  Project.associate = function (models) {
    Project.belongsTo(models.User, {
      foreignKey: "user_id", // Ensure this matches the foreign key in the model
      as: "user", // Optional: Add an alias for the association
    });
  };

  return Project;
};