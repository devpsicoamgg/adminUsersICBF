const { Router } = require("express");

const {
  getAccesHandlerAll,
} = require("../../2.-Handlers/2.4.-Others/getAccesHandler");

const getAccesRouter = Router();

getAccesRouter.get("/validate/", getAccesHandlerAll);

module.exports = getAccesRouter;
