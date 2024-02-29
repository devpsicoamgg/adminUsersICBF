const { Router } = require("express");
const subRouterAdmin = require("./1.1.-Admin/subRouterAdmin");
const subRouterCoordinators = require("./1.2.-Coordinators/subRouterCoordinators")
const subRouterTeachers = require("./1.3.-Teachers/subRouterTeachers")
const otherRoutes = require("./1.4.-OtherRoutes/otherRoutes")


const mainRouter = Router();

mainRouter.use("/admin", subRouterAdmin);
mainRouter.use("/coordinators", subRouterCoordinators);
mainRouter.use("/teachers", subRouterTeachers);
mainRouter.use("/acces", otherRoutes);

module.exports = mainRouter;
