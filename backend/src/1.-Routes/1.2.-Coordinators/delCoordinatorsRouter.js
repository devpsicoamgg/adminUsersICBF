const { Router } = require("express");

const {
  deleteGroupHandlerCoordinators,
  deleteTeacherHandlerCoordinators,
  deleteUserHandlerCoordinators,
} = require("../../2.-Handlers/2.2.-Coordinators/subHandlerCoordinators");

const delCoordinatorsRouter = Router();

delCoordinatorsRouter.delete("/groups/:id", deleteGroupHandlerCoordinators);
delCoordinatorsRouter.delete("/teachers/:id", deleteTeacherHandlerCoordinators);
delCoordinatorsRouter.delete("/users/:id", deleteUserHandlerCoordinators);

module.exports = delCoordinatorsRouter;
