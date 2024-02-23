const { Router } = require("express");

const { createUserHandlerTeachers, createFamilyMemberHandlerTeachers } = require("../../2.-Handlers/2.3.-Teachers/postTeachersHandler")

const postTeachersRouter = Router();

postTeachersRouter.post("/users", createUserHandlerTeachers);
postTeachersRouter.post("/users/:id", createFamilyMemberHandlerTeachers);


module.exports = postTeachersRouter;