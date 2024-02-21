const { Router } = require("express");

const {
  patchCoordinatorHandler,
  patchUserHandler,
  patchGroupHandler,
  patchTeacherHandler,
  patchContractHandler,
} = require("../../2.-Handlers/2.1.-Admin/subHandlerAdmin");

const patchAdminRouter = Router();

patchAdminRouter.patch("/coordinators/:id", patchCoordinatorHandler);
patchAdminRouter.patch("/users/:id", patchUserHandler);
patchAdminRouter.patch("/groups/:id", patchGroupHandler);
patchAdminRouter.patch("/teachers/:id", patchTeacherHandler);
patchAdminRouter.patch("/contract/:id", patchContractHandler);

module.exports = patchAdminRouter;
