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
  patchCoordinatorHandlerCoordinators,
  patchNutriHandlerCoordinators,
} = ptchCoordinatorsHandler;

const {
  deleteGroupHandlerCoordinators,
  deleteTeacherHandlerCoordinators,
  deleteUserHandlerCoordinators,
} = delCoordinatorsHandler;

const { 
  createGroupHandlerCoordinators, 
  createTeacherHandlerCoordinators, 
  createPsySocialHandlerCoordinator, 
  createNutriHandlerCoordinator,
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
  getAllCoordinatorsByCoordinator,
  getTeacherByIdHandlerCoordinators,
  patchUserHandlerCoordinators,
  patchGroupHandlerCoordinators,
  patchTeacherHandlerCoordinators,
  patchCoordinatorHandlerCoordinators,
  patchNutriHandlerCoordinators,
  createGroupHandlerCoordinators,
  createTeacherHandlerCoordinators,
  createPsySocialHandlerCoordinator, 
  createNutriHandlerCoordinator
};
