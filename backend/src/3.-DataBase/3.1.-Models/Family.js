const { DataTypes } = require("sequelize");

const FamilyModel = (sequelize) => {
  const Family = sequelize.define(
    "Family",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
      // Birth Information
      birthDepartment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthMunicipality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nataleDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      // Gender and SISBEN Information
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sisbenNumber: {
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


      role: {
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
    },
    { timestamps: true }
  );

  return Family;
};

module.exports = FamilyModel;
