const { Router } = require("express");

const subRouterCoordinators = Router();

const delCoordinatorsRouter = require("./delCoordinatorsRouter");
const getCoordinatorsRouter = require("./getCoordinatorsRouter");
const postCoordinatorsRouter = require("./postCoordinatorsRouter");
const patchCoordinatorsRouter =require("./ptchCoordinatorsRouter")


subRouterCoordinators.use(delCoordinatorsRouter)
subRouterCoordinators.use(getCoordinatorsRouter)
subRouterCoordinators.use(postCoordinatorsRouter)
subRouterCoordinators.use(patchCoordinatorsRouter)




module.exports = subRouterCoordinators;