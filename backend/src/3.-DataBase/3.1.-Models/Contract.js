const { DataTypes } = require("sequelize");

const ContractModel = (sequelize) => {
  const Contract = sequelize.define(
    "Contract",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      areaMisionalIcbf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      regional: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vigencia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      serviceName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supervisor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      contractNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      legalRepresentative: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      spots: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
      otroSi: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: false,
      },
      modificaciones: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: [],
      },
    },
    { timestamps: true }
  );
  
  return Contract;
};

module.exports = ContractModel;
