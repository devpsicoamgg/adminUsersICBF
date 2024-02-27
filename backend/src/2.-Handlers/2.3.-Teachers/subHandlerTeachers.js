const getCoordinatorsHandler = require("./getTeachersHandler");

const {
  getContractById, 
  getAllCoordinatorsByContractId,
  getAllMembersTeamIntervention, 
  getAllGroups, 
  getGroupById, 
  getAllUsersHandlerTeachers,

} = getTeachersHandler;

const {
  patchAdministrativeAssistantHandler, 
  patchCuentameHandler, 
  patchNutriHandler,
  patchTeacherHandlerTeachers,
  patchUserHandlerTeachers,
} = patchTeachersHandler;



module.exports = {
  getContractById, 
  getAllCoordinatorsByContractId,
  getAllMembersTeamIntervention, 
  getAllGroups, 
  getGroupById, 
  getAllUsersHandlerTeachers,
  patchAdministrativeAssistantHandler, 
  patchCuentameHandler,
  patchNutriHandler,
  patchTeacherHandlerTeachers,
  patchUserHandlerTeachers,
};
