require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const Contract = require("./models/Contract");
const Family = require("./models/Family");
const Group = require("./models/Group");
const TeamIntervention = require("./models/TeamIntervention");
const UserFinal = require("./models/UserFinal");
const Coordinator = require("./models/Coordinator");



const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

// Definir los modelos
const ContractModel = Contract(sequelize, DataTypes);
const FamilyModel = Family(sequelize, DataTypes);
const GroupModel = Group(sequelize, DataTypes);
const TeamInterventionModel = TeamIntervention(sequelize, DataTypes);
const UserFinalModel = UserFinal(sequelize, DataTypes);
const CoordinatorModel = Coordinator(sequelize, DataTypes);


ContractModel.hasMany(CoordinatorModel, { foreignKey: 'contractId' });
CoordinatorModel.belongsTo(ContractModel, { foreignKey: 'contractId' });

CoordinatorModel.hasMany(TeamInterventionModel, { foreignKey: 'coordinatorId' });
TeamInterventionModel.belongsTo(CoordinatorModel, { foreignKey: 'coordinatorId' });

TeamInterventionModel.hasMany(GroupModel, { foreignKey: 'teamInterventionId' });
GroupModel.belongsTo(TeamInterventionModel, { foreignKey: 'teamInterventionId' });

GroupModel.hasMany(UserFinalModel, { foreignKey: 'groupId' });
UserFinalModel.belongsTo(GroupModel, { foreignKey: 'groupId' });

FamilyModel.hasMany(UserFinalModel, { foreignKey: 'familyId' });
UserFinalModel.belongsTo(FamilyModel, { foreignKey: 'familyId' });


module.exports = {
  conn: sequelize,
  Contract: ContractModel,
  Family: FamilyModel,
  Group: GroupModel,
  TeamIntervention: TeamInterventionModel,
  UserFinal: UserFinalModel
};