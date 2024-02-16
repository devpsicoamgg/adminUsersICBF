const { Router } = require("express");

const {
  getCoordinatorsHandlerAdmin,
  getCoordinatorByIdHandlerAdmin,
  getUsersHandlerAdmin,
  getContractsHandlerAdmin,
  getContractByIdHandlerAdmin,
  getUserByIdHandlerAdmin,
  getGroupsHandlerAdmin,
  getGroupByIdHandlerAdmin,
  getTeachersByIdHandlerAdmin,
  getTeachersHandlerAdmin,
} = require("../../2.-Handlers/2.1.-Admin/subHandlerAdmin");

const getAdminRouter = Router();

getAdminRouter.get("/coordinators/", getCoordinatorsHandlerAdmin);
getAdminRouter.get("/coordinators/:id", getCoordinatorByIdHandlerAdmin);
getAdminRouter.get("/users", getUsersHandlerAdmin);
getAdminRouter.get("/contract", getContractsHandlerAdmin);
getAdminRouter.get("/contract/:id", getContractByIdHandlerAdmin);
getAdminRouter.get("/users/:id", getUserByIdHandlerAdmin);
getAdminRouter.get("/groups", getGroupsHandlerAdmin);
getAdminRouter.get("/groups/:id", getGroupByIdHandlerAdmin);
getAdminRouter.get("/teachers/:id", getTeachersByIdHandlerAdmin);
getAdminRouter.get("/teachers", getTeachersHandlerAdmin);

module.exports = getAdminRouter;
