require("dotenv").config();
const { Sequelize } = require("sequelize");

const ContractModel = require("./3.1.-Models/Contract");
const FamilyModel = require("./3.1.-Models/Family");
const GroupModel = require("./3.1.-Models/Group");
const TeamInterventionModel = require("./3.1.-Models/TeamIntervention");
const UserFinalModel = require("./3.1.-Models/UserFinal");
const CoordinatorModel = require("./3.1.-Models/Coordinator");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

ContractModel(sequelize);
FamilyModel(sequelize);
GroupModel(sequelize);
TeamInterventionModel(sequelize);
UserFinalModel(sequelize);
CoordinatorModel(sequelize);

const { Contract, Family, Group, TeamIntervention, UserFinal, Coordinator } =
  sequelize.models;

Contract.hasMany(Coordinator, { foreignKey: "contractId" });
Coordinator.belongsTo(Contract, { foreignKey: "contractId" });
Contract.hasMany(Group, { foreignKey: "contractId" });
Group.belongsTo(Contract, { foreignKey: "contractId" });
Contract.hasMany(TeamIntervention, { foreignKey: "contractId" });
TeamIntervention.belongsTo(Contract, { foreignKey: "contractId" });
Contract.hasMany(UserFinal, { foreignKey: "contractId" });
UserFinal.belongsTo(Contract, { foreignKey: "contractId" });


Coordinator.hasMany(TeamIntervention, { foreignKey: "coordinatorId" });
TeamIntervention.belongsTo(Coordinator, { foreignKey: "coordinatorId" });
Coordinator.hasMany(Group, { foreignKey: "coordinatorId" });
Group.belongsTo(Coordinator, { foreignKey: "coordinatorId" });
Coordinator.hasMany(UserFinal, { foreignKey: "coordinatorId" });
UserFinal.belongsTo(Coordinator, { foreignKey: "coordinatorId" });


TeamIntervention.hasMany(Group, { foreignKey: "teamInterventionId" });

Group.hasMany(UserFinal, { foreignKey: "groupId" });
UserFinal.belongsTo(Group, { foreignKey: "groupId" });

UserFinal.hasMany(TeamIntervention, { foreignKey: "userId" });
TeamIntervention.belongsTo(UserFinal, { foreignKey: "userId" });

Family.hasMany(UserFinal, { foreignKey: "familyId" });
UserFinal.belongsTo(Family, { foreignKey: "familyId" });

module.exports = {
  ...sequelize.models,
  sequelize,
};
