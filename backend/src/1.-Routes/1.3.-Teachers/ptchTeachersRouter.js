const { Router } = require("express");

const {
  patchUserHandlerTeachers,
  patchGroupHandlerTeachers,
  patchTeacherHandlerTeachers,
  patchAdministrativeAssistantHandler,
  patchCuentameHandler,
  patchNutriHandler,
} = require("../../2.-Handlers/2.3.-Teachers/ptchTeachersHandler");

const patchTeacherRouter = Router();

patchTeacherRouter.patch("/users/:id", patchUserHandlerTeachers);
patchTeacherRouter.patch("/groups/:id", patchGroupHandlerTeachers);
patchTeacherRouter.patch("/teachers/:id", patchTeacherHandlerTeachers);
patchTeacherRouter.patch("/administrativeassiatant/:id", patchAdministrativeAssistantHandler);
patchTeacherRouter.patch("/cuentame/:id", patchCuentameHandler);
patchTeacherRouter.patch("/nutrition/:id", patchNutriHandler);

module.exports = patchTeacherRouter;
