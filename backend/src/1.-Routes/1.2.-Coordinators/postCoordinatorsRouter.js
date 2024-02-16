const { Router } = require("express");

const {   createGroupHandlerCoordinators, 
  createTeacherHandlerCoordinators, } = require("../../2.-Handlers/2.2.-Coordinators/postCoordinatorsHandler")

const postCoordinatorsRouter = Router();





postCoordinatorsRouter.post("/teachers",   createTeacherHandlerCoordinators);
postCoordinatorsRouter.post("/groups", createGroupHandlerCoordinators);

module.exports = postCoordinatorsRouter;