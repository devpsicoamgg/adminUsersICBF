const { Router } = require("express");
const {
  createCoordinatorHandler,
  createContractHandler,
  createTeacherHandler,
  createGroupHandler,
} = require("../../2.-Handlers/2.1.-Admin/postAdmindHandler");

const postAdminRouter = Router();

postAdminRouter.post("/coordinators/", createCoordinatorHandler);
postAdminRouter.post("/contract/", createContractHandler);
postAdminRouter.post("/teachers", createTeacherHandler);
postAdminRouter.post("/groups", createGroupHandler);

module.exports = postAdminRouter;
