const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainProfileRoutes = require("./1.-Routes/mainRouter")

const server = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use(mainProfileRoutes)



module.exports = server;
