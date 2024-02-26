const getCoordinatorsHandler = require("./getTeachersHandler");

const {
  getContractById, 
  getAllCoordinatorsByContractId,
  getAllMembersTeamIntervention, 
  getAllGroups, 
  getGroupById, 
} = getTeachersHandler;

const {
  patchAdministrativeAssistantHandler
} = patchTeachersHandler;



module.exports = {
  getContractById, 
  getAllCoordinatorsByContractId,
  getAllMembersTeamIntervention, 
  getAllGroups, 
  getGroupById, 
  patchAdministrativeAssistantHandler
};
