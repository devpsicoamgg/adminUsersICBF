const { Router } = require("express");

const {
  createGroupHandlerCoordinators,
  createTeacherHandlerCoordinators,
  createPsySocialHandlerCoordinator, 
  createNutriHandlerCoordinator
} = require("../../2.-Handlers/2.2.-Coordinators/subHandlerCoordinators");

const postCoordinatorsRouter = Router();

postCoordinatorsRouter.post("/teachers", createTeacherHandlerCoordinators);
postCoordinatorsRouter.post("/groups", createGroupHandlerCoordinators);
postCoordinatorsRouter.post("/psysocial", createPsySocialHandlerCoordinator);
postCoordinatorsRouter.post("/nutri", createNutriHandlerCoordinator);

module.exports = postCoordinatorsRouter;
