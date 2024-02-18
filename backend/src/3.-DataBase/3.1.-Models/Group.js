const { DataTypes } = require('sequelize');

const GroupModel = (sequelize) => {
  const Group = sequelize.define(
    'Group',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      groupName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cuentameCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

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
      }, 
      modificaciones: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: [],
      },
    },
    { timestamps: false }
  );

  return Group;
};

module.exports = GroupModel;
