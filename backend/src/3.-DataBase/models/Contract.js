const { DataTypes } = require('sequelize');

const Contract = (sequelize) => {
  const Contract = sequelize.define(
    'Contract',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      areaMisionalIcbf: {
        type: DataTypes.STRING,
        allowNull: false
      },
      regional: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vigencia: {
        type: DataTypes.STRING,
        allowNull: false
      },
      serviceName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      supervisor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      contractNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      legalRepresentative: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false }
  );

  return Contract;
};

module.exports = Contract;
