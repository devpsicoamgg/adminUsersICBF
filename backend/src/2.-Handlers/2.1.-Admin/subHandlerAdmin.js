const delAdminHandlers = require("./delAdminHandler");
const getAdminHandlers = require("./getAdminHandler");
const postAdminHandlers = require("./postAdmindHandler");
const patchAdminHandlers = require("./ptchAdminHandler");

const {
  delAdminHandlerCoordinator,
  delAdminHandlerGroup,
  delAdminHandlerTeacher,
  delAdminHandlerContract, 
  delAdminHandlerAdministrativeAssistant,
  delAdminHandlerCuentameCollaborator,
  delAdminHandlerNutriCollaborator,
  delAdminHandlerPsyCollaborator
} = delAdminHandlers;

const {
  getCoordinatorsHandlerAdmin,
  getCoordinatorByIdHandlerAdmin,
  getUsersHandlerAdmin,
  getContractsHandlerAdmin,
  getContractByIdHandlerAdmin,
  getUserByIdHandlerAdmin,
  getGroupsHandlerAdmin,
  getGroupByIdHandlerAdmin,
  getTeachersByIdHandlerAdmin,
  getTeachersHandlerAdmin,
} = getAdminHandlers;

const {
  createCoordinatorHandler,
  createContractHandler,
  createTeacherHandler,
  createGroupHandler,
  createNutritionistHandler,
  createPsySocialHandler, 
  createAdministrativeHandler,
  createInformationSystemsHandler,
} = postAdminHandlers;

const {
  patchCoordinatorHandler,
  patchUserHandler,
  patchGroupHandler,
  patchTeacherHandler,
  patchContractHandler,
  patchAdministrativeAssistantHandler,
  patchPsyHandler,
  patchCuentameHandler,
  patchNutriHandler,
} = patchAdminHandlers;

module.exports = {
  delAdminHandlerContract,
  delAdminHandlerCoordinator,
  delAdminHandlerGroup,
  delAdminHandlerTeacher,
  delAdminHandlerAdministrativeAssistant,
  delAdminHandlerCuentameCollaborator,
  delAdminHandlerNutriCollaborator,
  delAdminHandlerPsyCollaborator,
  getCoordinatorsHandlerAdmin,
  getCoordinatorByIdHandlerAdmin,
  getUsersHandlerAdmin,
  getContractsHandlerAdmin,
  getContractByIdHandlerAdmin,
  getUserByIdHandlerAdmin,
  getGroupsHandlerAdmin,
  getGroupByIdHandlerAdmin,
  getTeachersByIdHandlerAdmin,
  getTeachersHandlerAdmin,
  createCoordinatorHandler,
  createContractHandler,
  createTeacherHandler,
  createNutritionistHandler,
  createGroupHandler,
  createPsySocialHandler, 
  createAdministrativeHandler,
  createInformationSystemsHandler,
  patchCoordinatorHandler,
  patchUserHandler,
  patchGroupHandler,
  patchTeacherHandler,
  patchContractHandler,
  patchAdministrativeAssistantHandler,
  patchPsyHandler,
  patchCuentameHandler,
  patchNutriHandler,
};
