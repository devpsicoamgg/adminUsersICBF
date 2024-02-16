const { Router } = require("express");

const {
  delAdminHandlerCoordinator,
  delAdminHandlerGroup,
  delAdminHandlerTeacher,
} = require("../../2.-Handlers/2.1.-Admin/subHandlerAdmin");

const delAdminRouter = Router();

delAdminRouter.delete("/coordinators/:id", delAdminHandlerCoordinator);
delAdminRouter.delete("/groups/:id", delAdminHandlerGroup);
delAdminRouter.delete("/teachers/:id", delAdminHandlerTeacher);

module.exports = delAdminRouter;
