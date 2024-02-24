const delAdminHandlers = require("./delAdminHandler");
const getAdminHandlers = require("./getAdminHandler");
const postAdminHandlers = require("./postAdmindHandler");
const patchAdminHandlers = require("./ptchAdminHandler");

const {
  delAdminHandlerCoordinator,
  delAdminHandlerGroup,
  delAdminHandlerTeacher,
  delAdminHandlerContract
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
} = postAdminHandlers;

const {
  patchCoordinatorHandler,
  patchUserHandler,
  patchGroupHandler,
  patchTeacherHandler,
  patchContractHandler,
} = patchAdminHandlers;

module.exports = {
  delAdminHandlerContract,
  delAdminHandlerCoordinator,
  delAdminHandlerGroup,
  delAdminHandlerTeacher,
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
  patchCoordinatorHandler,
  patchUserHandler,
  patchGroupHandler,
  patchTeacherHandler,
  patchContractHandler,
};
