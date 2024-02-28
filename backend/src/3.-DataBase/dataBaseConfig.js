require("dotenv").config();
const { Sequelize } = require("sequelize");

const ContractModel = require("./3.1.-Models/Contract");
const FamilyModel = require("./3.1.-Models/Family");
const GroupModel = require("./3.1.-Models/Group");
const TeamInterventionModel = require("./3.1.-Models/TeamIntervention");
const UserFinalModel = require("./3.1.-Models/UserFinal");
const CoordinatorModel = require("./3.1.-Models/Coordinator");
const AdministrativeAssistantModel = require("./3.1.-Models/AdministrativeAssistant");
const HealthAndNutritionModel = require("./3.1.-Models/HealthAndNutrition");
const InformationSystemsModel = require("./3.1.-Models/InformationSystems");
const PsySocialModel = require("./3.1.-Models/PsySocial");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
      dialectOptions: {
       ssl: {
       require: true,
       rejectUnauthorized: false,
     },   
    }, 
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
AdministrativeAssistantModel(sequelize);
HealthAndNutritionModel(sequelize);
InformationSystemsModel(sequelize);
PsySocialModel(sequelize);

const {
  Contract,
  Family,
  Group,
  TeamIntervention,
  UserFinal,
  Coordinator,
  AdministrativeAssistant,
  HealthAndNutrition,
  InformationSystems,
  PsySocial,
} = sequelize.models;

// Contract - Coordinator (Uno a muchos):
Contract.hasMany(Coordinator, { foreignKey: "contractId" });
// Un coordinador pertenece a un solo contrato.
Coordinator.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - Group (Uno a muchos):
Contract.hasMany(Group, { foreignKey: "contractId" });
// Un grupo pertenece a un solo contrato.
Group.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - TeamIntervention (Uno a muchos):
Contract.hasMany(TeamIntervention, { foreignKey: "contractId" });
// Un colaborador pertenece a un solo contrato.
TeamIntervention.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - Nutri (Uno a muchos):
Contract.hasMany(HealthAndNutrition, { foreignKey: "contractId" });
// Un Nutri pertenece a un solo contrato.
HealthAndNutrition.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - Admin (Uno a muchos):
Contract.hasMany(AdministrativeAssistant, { foreignKey: "contractId" });
// Un Admin pertenece a un solo contrato.
AdministrativeAssistant.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - Cuentame (Uno a muchos):
Contract.hasMany(InformationSystems, { foreignKey: "contractId" });
// Un Cuéntame pertenece a un solo contrato.
InformationSystems.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - psycosocial (Uno a muchos):
Contract.hasMany(PsySocial, { foreignKey: "contractId" });
// Un colaborador pertenece a un solo contrato.
PsySocial.belongsTo(Contract, { foreignKey: "contractId" });

// Contract - UserFinal (Uno a muchos):
Contract.hasMany(UserFinal, { foreignKey: "contractId" });
// Un usuario final pertenece a un solo contrato.
UserFinal.belongsTo(Contract, { foreignKey: "contractId" });

// COORDINADORES - Group (Uno a muchos):
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
TeamIntervention.belongsToMany(Group, { through: "TeamInterventionGroup" });
Group.belongsToMany(TeamIntervention, { through: "TeamInterventionGroup" });

// TeamIntervention - UserFinal (mucho a muchos):
// Un docente puede tener muchos usuarios finales.
UserFinal.belongsTo(TeamIntervention, { foreignKey: "teacherId" });
TeamIntervention.belongsTo(UserFinal, { foreignKey: "teacherId" });

// TeamIntervention - HealthAndNutrition (mucho a muchos):
// Un docente puede tener muchos usuarios finales de nutrición.
HealthAndNutrition.belongsToMany(Group, { through: "HealthAndNutritionGroups" });
Group.belongsToMany(HealthAndNutrition, { through: "HealthAndNutritionGroups" });

// TeamIntervention - PsySocial (mucho a muchos):
// Un docente puede tener muchos usuarios finales de psicosocial.
PsySocial.belongsToMany(Group, { through: "PsySocialGroups" });
Group.belongsToMany(PsySocial, { through: "PsySocialGroups" });

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
