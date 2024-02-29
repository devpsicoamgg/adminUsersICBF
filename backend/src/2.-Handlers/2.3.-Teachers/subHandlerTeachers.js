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
  patchUserHandlerTeachers,
  patchFamilyHandlerTeachers,
  patchGroupHandlerTeachers,
  patchAdministrativeAssistantHandler, 
  patchCuentameHandler, 
  patchNutriHandler,
  patchTeacherHandlerTeachers,
  patchPsySocialHandler,
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
  patchFamilyHandlerTeachers,
  patchGroupHandlerTeachers,
  patchPsySocialHandler,
};
