const { Router } = require("express");

const { createUserHandlerTeachers } = require("../../2.-Handlers/2.3.-Teachers/postTeachersHandler")

const postTeachersRouter = Router();

postTeachersRouter.post("/users", createUserHandlerTeachers);


module.exports = postTeachersRouter;