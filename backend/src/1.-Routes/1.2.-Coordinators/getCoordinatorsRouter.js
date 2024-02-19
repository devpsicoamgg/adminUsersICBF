const { Router } = require("express");

const {
  getAllGroupsHandlerCoordinators,
  getAllUsersHandlerCoordinators,
  getUserByIdHandlerCoordinators,
  getContractByIdHandlerCoordinators,
  getGroupByIdHandlerCoordinators,
  getAllTeachersHandlerCoordinators,
  getTeacherByIdHandlerCoordinators,
  getAllCoordinatorsByCoordinator,
} = require("../../2.-Handlers/2.2.-Coordinators/subHandlerCoordinators");

const getCoordinatorsRouter = Router();

getCoordinatorsRouter.get("/contract/:id", getContractByIdHandlerCoordinators);
getCoordinatorsRouter.get("/users", getAllUsersHandlerCoordinators);
getCoordinatorsRouter.get("/users/:id", getUserByIdHandlerCoordinators);
getCoordinatorsRouter.get("/groups", getAllGroupsHandlerCoordinators);
getCoordinatorsRouter.get("/coordinators/:contractId", getAllCoordinatorsByCoordinator);
getCoordinatorsRouter.get("/groups/:id", getGroupByIdHandlerCoordinators);
getCoordinatorsRouter.get("/teachers", getAllTeachersHandlerCoordinators);
getCoordinatorsRouter.get("/teachers/:id", getTeacherByIdHandlerCoordinators);

module.exports = getCoordinatorsRouter;
