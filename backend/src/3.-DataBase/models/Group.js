const { DataTypes } = require('sequelize');

const Group = (sequelize) => {
  const Group = sequelize.define(
    'Group',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      groupName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cuentameCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      municipality: {
        type: DataTypes.STRING,
        allowNull: false
      },
      neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false }
  );

  return Group;
};

module.exports = Group;
