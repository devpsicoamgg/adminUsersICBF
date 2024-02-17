const { Router } = require("express");

const {
  getAllGroupsHandlerCoordinators,
  getAllUsersHandlerCoordinators,
  getUserByIdHandlerCoordinators,
  getContractByIdHandlerCoordinators,
  getGroupByIdHandlerCoordinators,
  getAllTeachersHandlerCoordinators,
  getTeacherByIdHandlerCoordinators,
} = require("../../2.-Handlers/2.2.-Coordinators/getCoordinatorsHandler");

const getCoordinatorsRouter = Router();

getCoordinatorsRouter.get("/contract/:id", getContractByIdHandlerCoordinators);
getCoordinatorsRouter.get("/users", getAllUsersHandlerCoordinators);
getCoordinatorsRouter.get("/users/:id", getUserByIdHandlerCoordinators);
getCoordinatorsRouter.get("/groups", getAllGroupsHandlerCoordinators);
getCoordinatorsRouter.get("/groups/:id", getGroupByIdHandlerCoordinators);
getCoordinatorsRouter.get("/teachers", getAllTeachersHandlerCoordinators);
getCoordinatorsRouter.get("/teachers/:id", getTeacherByIdHandlerCoordinators);

module.exports = getCoordinatorsRouter;