const { DataTypes } = require("sequelize");

const SuperAdminModel = (sequelize) => {
  const SuperAdmin = sequelize.define(
    "SuperAdmin",
    {
      // Primary key
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // Personal Information
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      secondName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      firstLastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      secondLastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      // Document Information
      kindDoc: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      numberDoc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      nataleDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // Gender and SISBEN Information
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      // Health System Information
      healthSystemAffiliation: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },

      regimen: {
        type: DataTypes.ENUM("Subsidiado", "Contributivo", "Especial"),
        allowNull: true,
      },

      kindHealthSystem: {
        type: DataTypes.ENUM("Cotizante", "Beneficiario"),
        allowNull: true,
      },

      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      entryDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      reasonForLeaving: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      exitDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      healthSocialSecurity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eps: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      arl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pensionFund: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      compensationFund: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      imgDoc: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      modificaciones: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        defaultValue: [],
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      lastAccess: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
        defaultValue: [],
      },
    },

    { timestamps: true }
  );

  return SuperAdmin;
};

module.exports = SuperAdminModel;
