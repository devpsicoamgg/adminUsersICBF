const { DataTypes } = require("sequelize");

const UserFinalModel = (sequelize) => {
  const UserFinal = sequelize.define(
    "UserFinal",
    {
      // Primary key
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

      // Marital and Disability Information
      maritalStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      disability: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },

      // Gender and SISBEN Information
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      sisbenNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // Health System Information
      healthSystemAffiliation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      regimen: {
        type: DataTypes.ENUM("Subsidiado", "Contributivo", "Especial"),
        allowNull: false,
      },

      kindHealthSystem: {
        type: DataTypes.ENUM("Cotizante", "Beneficiario"),
        allowNull: false,
      },

      // Vaccines and Growth & Development
      vaccines: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

      growthAndDevelopment: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

      // Ethnicity and Occupation
      ethnicity: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      occupation: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // Measurements and Annotations

      nutritionalMeasurements: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
      },

      psychosocialAnnotations: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },

      pedagogicalAnnotations: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },

      // Modification History and Database Status
      modificationHistory: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
      },

      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      // Entry and Exit Information
      entryDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      reasonForLeaving: {
        type: DataTypes.STRING,
        allowNull: true,
      },


       photo: {
        type: DataTypes.STRING, 
        allowNull: true,
      },

      
      imgDoc: {
        type: DataTypes.STRING, 
        allowNull: true,
      },

      exitDate: {
        type: DataTypes.DATE,
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
      }
      
    },
    { timestamps: true }
  );

  return UserFinal;
};

module.exports = UserFinalModel;
