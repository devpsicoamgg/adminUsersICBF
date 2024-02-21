const { Router } = require("express");

const {
  patchUserHandlerCoordinators,
  patchGroupHandlerCoordinators,
  patchTeacherHandlerCoordinators,
  patchCoordinatorHandlerCoordinators,
} = require("../../2.-Handlers/2.2.-Coordinators/subHandlerCoordinators");

const patchCoordinatorsRouter = Router();

patchCoordinatorsRouter.patch("/users/:id", patchUserHandlerCoordinators);
patchCoordinatorsRouter.patch("/groups/:id", patchGroupHandlerCoordinators);
patchCoordinatorsRouter.patch("/teachers/:id", patchTeacherHandlerCoordinators);
patchCoordinatorsRouter.patch("/coordinator/:id", patchCoordinatorHandlerCoordinators);

module.exports = patchCoordinatorsRouter;
