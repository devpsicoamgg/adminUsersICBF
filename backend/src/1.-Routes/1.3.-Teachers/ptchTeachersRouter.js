const { Router } = require("express");

const {
  patchUserHandlerTeachers,
  patchGroupHandlerTeachers,
  patchTeacherHandlerTeachers,
  patchAdministrativeAssistantHandler,
  patchCuentameHandler,
  patchNutriHandler,
  patchFamilyHandlerTeachers,
} = require("../../2.-Handlers/2.3.-Teachers/ptchTeachersHandler");

const patchTeacherRouter = Router();

patchTeacherRouter.patch("/administrativeassiatant/:id", patchAdministrativeAssistantHandler);
patchTeacherRouter.patch("/cuentame/:id", patchCuentameHandler);
patchTeacherRouter.patch("/family/:id", patchFamilyHandlerTeachers);
patchTeacherRouter.patch("/users/:id", patchUserHandlerTeachers);
patchTeacherRouter.patch("/groups/:id", patchGroupHandlerTeachers);
patchTeacherRouter.patch("/nutrition/:id", patchNutriHandler);
patchTeacherRouter.patch("/teachers/:id", patchTeacherHandlerTeachers);
patchTeacherRouter.patch("/psysocial/:id", patchTeacherHandlerTeachers);

module.exports = patchTeacherRouter;
