const { Router } = require("express");

const {
  delAdminHandlerCoordinator,
  delAdminHandlerGroup,
  delAdminHandlerTeacher,
  delAdminHandlerContract, 
  delAdminHandlerAdministrativeAssistant,
  delAdminHandlerCuentameCollaborator,
  delAdminHandlerNutriCollaborator,
  delAdminHandlerPsyCollaborator,
} = require("../../2.-Handlers/2.1.-Admin/subHandlerAdmin");

const delAdminRouter = Router();

delAdminRouter.delete("/coordinators/:id", delAdminHandlerCoordinator);
delAdminRouter.delete("/groups/:id", delAdminHandlerGroup);
delAdminRouter.delete("/teachers/:id", delAdminHandlerTeacher);
delAdminRouter.delete("/contract/:id", delAdminHandlerContract);
delAdminRouter.delete("/administrativeassistant/:id", delAdminHandlerAdministrativeAssistant);
delAdminRouter.delete("/cuentamecollaborator/:id", delAdminHandlerCuentameCollaborator);
delAdminRouter.delete("/nutricollaborator/:id", delAdminHandlerNutriCollaborator);
delAdminRouter.delete("/psysocial/:id", delAdminHandlerPsyCollaborator);

module.exports = delAdminRouter;
