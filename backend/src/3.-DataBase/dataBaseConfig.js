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

// Contract - Coordinator (Uno a muchos):
// Un contrato puede tener muchos coordinadores.
Contract.hasMany(Coordinator, { foreignKey: "contractId" });
// Un coordinador pertenece a un solo contrato.
Coordinator.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - Group (Uno a muchos):
// Un contrato puede tener muchos grupos.
Contract.hasMany(Group, { foreignKey: "contractId" });
// Un grupo pertenece a un solo contrato.
Group.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - TeamIntervention (Uno a muchos):
// Un contrato puede tener muchos colaboradores.
Contract.hasMany(TeamIntervention, { foreignKey: "contractId" });
// Un colaborador pertenece a un solo contrato.
TeamIntervention.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - UserFinal (Uno a muchos):
// Un contrato puede tener muchos usuarios finales.
Contract.hasMany(UserFinal, { foreignKey: "contractId" });
// Un usuario final pertenece a un solo contrato.
UserFinal.belongsTo(Contract, { foreignKey: "contractId" });

// COORDINADORES - TeamIntervention (Uno a muchos):

// Coordinator - Group (Uno a muchos):
// Un coordinador puede tener muchos grupos.
Coordinator.hasMany(Group, { foreignKey: "coordinatorId" });
// Un grupo pertenece a un solo coordinador.
Group.belongsTo(Coordinator, { foreignKey: "coordinatorId" });

// Un coordinador puede tener muchos colaboradores.
Coordinator.hasMany(TeamIntervention, { foreignKey: "coordinatorId" });
// Un colaborador pertenece a un solo coordinador.
TeamIntervention.belongsTo(Coordinator, { foreignKey: "coordinatorId" });

// Coordinator - UserFinal (Uno a muchos):
// Un coordinador puede tener muchos usuarios finales.
Coordinator.hasMany(UserFinal, { foreignKey: "coordinatorId" });
// Un usuario final pertenece a un solo coordinador.
UserFinal.belongsTo(Coordinator, { foreignKey: "coordinatorId" });

//DOCENTES
// TeamIntervention - Group (muchos a muchos):
// Un colaborador puede tener muchos grupos.
TeamIntervention.hasMany(Group, { foreignKey: "groupId" });
// Un grupo puede tener varios docentes.
Group.hasMany(TeamIntervention, { foreignKey: "groupId" });

// TeamIntervention - UserFinal (mucho a muchos):
// Un docente puede tener muchos usuarios finales.
UserFinal.belongsTo(TeamIntervention, { foreignKey: 'teacherId' });
TeamIntervention.hasMany(UserFinal, { foreignKey: 'teacherId' });

// UserFinal - Family (Muchos a uno):
// Un usuario puede tenr varios miembros de familia.
UserFinal.hasMany(Family, { foreignKey: "userFinalId" });
// Una familia belongs to finales.
Family.belongsTo(UserFinal, { foreignKey: "userFinalId" });


// UserFinal - Family (Muchos a uno):
// Un usuario pertenece a un grupo.
UserFinal.belongsTo(Group, { foreignKey: "groupId" });
// Un grupo tiene varios usuarios finales.
Group.hasMany(UserFinal, { foreignKey: "groupId" });

module.exports = {
  ...sequelize.models,
  sequelize,
};
