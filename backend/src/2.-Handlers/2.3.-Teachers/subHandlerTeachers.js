const getCoordinatorsHandler = require("./getTeachersHandler");

const {
  getContractById, 
  getAllCoordinatorsByContractId,
  getAllMembersTeamIntervention, 
  getAllGroups, 
  getGroupById, 
} = getTeachersHandler;



module.exports = {
  getContractById, 
  getAllCoordinatorsByContractId,
  getAllMembersTeamIntervention, 
  getAllGroups, 
  getGroupById, 
};
