const { Router } = require("express");
const {
  createCoordinatorHandler,
  createContractHandler,
  createTeacherHandler,
  createGroupHandler,
  createNutritionistHandler,
  createPsySocialHandler,
  createAdministrativeHandler,
  createInformationSystemsHandler,
  createSuperAdminHandler,
} = require("../../2.-Handlers/2.1.-Admin/subHandlerAdmin");

const postAdminRouter = Router();

postAdminRouter.post("/coordinators/", createCoordinatorHandler);
postAdminRouter.post("/contract/", createContractHandler);
postAdminRouter.post("/teachers", createTeacherHandler);
postAdminRouter.post("/groups", createGroupHandler);
postAdminRouter.post("/nutritionist", createNutritionistHandler);
postAdminRouter.post("/psysocial", createPsySocialHandler);
postAdminRouter.post("/administrative", createAdministrativeHandler);
postAdminRouter.post("/informationsystems", createInformationSystemsHandler);
postAdminRouter.post("/superadmin", createSuperAdminHandler);

module.exports = postAdminRouter;
