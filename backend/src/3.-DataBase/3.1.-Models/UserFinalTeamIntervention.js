const { DataTypes } = require("sequelize");

const UserFinalTeamIntervention = (sequelize) => {
  const UserFinalTeam = sequelize.define(
    "UserFinalTeam",
    {
      UserFinalId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "UserFinal",
          key: "id",
        },
      },
      teamInterventionId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "TeamIntervention",
          key: "id",
        },
      },
    },
    { timestamps: false }
  );

  return UserFinalTeam;
};

module.exports = UserFinalTeamIntervention;
