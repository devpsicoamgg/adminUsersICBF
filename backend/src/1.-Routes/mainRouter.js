const { Router } = require("express");
const subRouterAdmin = require("./1.1.-Admin/subRouterAdmin");
const subRouterCoordinators = require("./1.2.-Coordinators/subRouterCoordinators")
const subRouterTeachers = require("./1.3.-Teachers/subRouterTeachers")



const mainRouter = Router();

mainRouter.use("/admin", subRouterAdmin);
mainRouter.use("/coordinators", subRouterCoordinators);
mainRouter.use("/teachers", subRouterTeachers);

module.exports = mainRouter;
