const delAdminHandlers = require("./delAdminHandler");
const getAdminHandlers = require("../../2.-Handlers/2.1.-Admin/getAdminHandler");
const postAdminHandlers = require("../../2.-Handlers/2.1.-Admin/postAdmindHandler")
const patchAdminHandlers = require("../../2.-Handlers/2.1.-Admin/ptchAdminHandler")


const {
  delAdminHandlerCoordinator,
  delAdminHandlerGroup,
  delAdminHandlerTeacher,
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
  createGroupHandler
} = postAdminHandlers;

module.exports = {
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
  createGroupHandler,
};
