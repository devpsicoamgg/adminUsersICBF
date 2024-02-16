const { Router } = require("express");

const {
  getAllCoordinatorsHandlerTeachers,
  getAllUsersHandlerTeachers,
  getUserByIdHandlerTeachers,
  getContractByIdHandlerTeachers,
  getAllGroupsHandlerTeachers,
  getGroupByIdHandlerTeachers,
  getAllTeachersHandlerTeachers,
} = require("../../2.-Handlers/2.3.-Teachers/getTeachersHandler");

const getTeachersRouter = Router();

getTeachersRouter.get("/coordinators/", getAllCoordinatorsHandlerTeachers);
getTeachersRouter.get("/users", getAllUsersHandlerTeachers);
getTeachersRouter.get("/users/:id", getUserByIdHandlerTeachers);
getTeachersRouter.get("/contract/:id", getContractByIdHandlerTeachers);
getTeachersRouter.get("/groups", getAllGroupsHandlerTeachers);
getTeachersRouter.get("/groups/:id", getGroupByIdHandlerTeachers);
getTeachersRouter.get("/teachers", getAllTeachersHandlerTeachers);

module.exports = getTeachersRouter;
