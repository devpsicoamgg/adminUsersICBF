require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const Contract = require("./models/Contract");
const Family = require("./models/Family");
const Group = require("./models/Group");
const TeamIntervention = require("./models/TeamIntervention");
const UserFinal = require("./models/UserFinal");



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


ContractModel.hasOne(TeamInterventionModel, { foreignKey: 'contractId' });
ContractModel.hasMany(UserFinalModel, { foreignKey: 'contractId' });

TeamInterventionModel.belongsTo(ContractModel, { foreignKey: 'contractId' });

FamilyModel.hasMany(UserFinalModel, { foreignKey: 'familyId' });

GroupModel.belongsTo(UserFinalModel, { foreignKey: 'groupId' });
GroupModel.hasMany(UserFinalModel, { foreignKey: 'groupId' });

UserFinalModel.belongsTo(GroupModel, { foreignKey: 'groupId' });
UserFinalModel.belongsTo(FamilyModel, { foreignKey: 'familyId' });


module.exports = {
  conn: sequelize,
  Contract: ContractModel,
  Family: FamilyModel,
  Group: GroupModel,
  TeamIntervention: TeamInterventionModel,
  UserFinal: UserFinalModel
};