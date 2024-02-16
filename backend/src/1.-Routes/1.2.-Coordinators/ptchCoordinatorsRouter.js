const { Router } = require("express");

const {
  patchUserHandlerCoordinators,
  patchGroupHandlerCoordinators,
  patchTeacherHandlerCoordinators,
} = require("../../2.-Handlers/2.2.-Coordinators/ptchCoordinatorsHandler");

const patchCoordinatorsRouter = Router();

patchCoordinatorsRouter.patch("/users/:id", patchUserHandlerCoordinators);
patchCoordinatorsRouter.patch("/groups/:id", patchGroupHandlerCoordinators);
patchCoordinatorsRouter.patch("/teachers/:id", patchTeacherHandlerCoordinators);

module.exports = patchCoordinatorsRouter;
