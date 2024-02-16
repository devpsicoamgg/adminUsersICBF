const { Router } = require("express");

const {
  patchUserHandlerTeachers,
  patchGroupHandlerTeachers,
  patchTeacherHandlerTeachers,
} = require("../../2.-Handlers/2.3.-Teachers/ptchTeachersHandler");

const patchTeacherRouter = Router();

patchTeacherRouter.patch("/users/:id", patchUserHandlerTeachers);
patchTeacherRouter.patch("/groups/:id", patchGroupHandlerTeachers);
patchTeacherRouter.patch("/teachers/:id", patchTeacherHandlerTeachers);

module.exports = patchTeacherRouter;
