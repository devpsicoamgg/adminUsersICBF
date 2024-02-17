const { DataTypes } = require("sequelize");

const TeamIntervention = (sequelize) => {
  const TeamIntervention = sequelize.define(
    "TeamIntervention",
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
        allowNull: true,
      },
      birthMunicipality: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nataleDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      // Marital and Disability Information
      maritalStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      disability: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
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

      // Ethnicity and Occupation
      ethnicity: {
        type: DataTypes.STRING,
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
      maxEducationalLevel: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kindFormation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      typeOfFormation: {
        type: DataTypes.ENUM("Vocational", "Foreign"),
        allowNull: true,
      },
      lastYearHighSchool: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      highSchoolCompletionDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      university: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastLevelEducationDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      postgraduateTitle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      trainingNeeds: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      experienceWorkingEarlyChildhood: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      accessToGoodsServices: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      computer: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      internetAccess: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      contractType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      communityMother: {
        type: DataTypes.BOOLEAN,
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

      role: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
 
      imgDoc: {
        type: DataTypes.STRING, 
        allowNull: true,
      },

    },
    { timestamps: true }
  );

  return TeamIntervention;
};

module.exports = TeamIntervention;
