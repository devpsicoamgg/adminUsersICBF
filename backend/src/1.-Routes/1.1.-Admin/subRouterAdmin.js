const { Router } = require("express");

const subRouterAdmin = Router();

const getAdminRouter = require("./getAdminRouter");
const delAdminRouter = require("./delAdminRouter")
const postAdminRouter = require("./postAdminRouter")
const patchAdminRouter = require("./ptchAdminRouter")


subRouterAdmin.use(getAdminRouter)
subRouterAdmin.use(delAdminRouter)
subRouterAdmin.use(postAdminRouter)
subRouterAdmin.use(patchAdminRouter)



module.exports = subRouterAdmin;