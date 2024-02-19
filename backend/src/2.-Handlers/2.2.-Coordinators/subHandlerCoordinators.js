const delCoordinatorsHandler  = require("./delCoordinatorsHandler");
const getCoordinatorsHandler = require("./getCoordinatorsHandler");
const ptchCoordinatorsHandler = require("./ptchCoordinatorsHandler");
const postCoordinatorsHandler = require("./postCoordinatorsHandler");

const {
  getAllGroupsHandlerCoordinators,
  getAllUsersHandlerCoordinators,
  getUserByIdHandlerCoordinators,
  getContractByIdHandlerCoordinators,
  getAllCoordinatorsByCoordinator,
  getGroupByIdHandlerCoordinators,
  getAllTeachersHandlerCoordinators,
  getTeacherByIdHandlerCoordinators,
} = getCoordinatorsHandler;

const {
  patchUserHandlerCoordinators,
  patchGroupHandlerCoordinators,
  patchTeacherHandlerCoordinators,
} = ptchCoordinatorsHandler;

const {
  deleteGroupHandlerCoordinators,
  deleteTeacherHandlerCoordinators,
  deleteUserHandlerCoordinators,
} = delCoordinatorsHandler;

const { 
  createGroupHandlerCoordinators, 
  createTeacherHandlerCoordinators 
} = postCoordinatorsHandler;

module.exports = {
  deleteGroupHandlerCoordinators,
  deleteTeacherHandlerCoordinators,
  deleteUserHandlerCoordinators,
  getAllGroupsHandlerCoordinators,
  getAllUsersHandlerCoordinators,
  getUserByIdHandlerCoordinators,
  getContractByIdHandlerCoordinators,
  getGroupByIdHandlerCoordinators,
  getAllTeachersHandlerCoordinators,
  getTeacherByIdHandlerCoordinators,
  patchUserHandlerCoordinators,
  patchGroupHandlerCoordinators,
  patchTeacherHandlerCoordinators,
  createGroupHandlerCoordinators,
  createTeacherHandlerCoordinators,
  getAllCoordinatorsByCoordinator,
};
