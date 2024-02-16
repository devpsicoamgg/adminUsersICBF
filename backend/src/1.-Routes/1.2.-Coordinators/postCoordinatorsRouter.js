const { Router } = require("express");

const postCoordinatorsRouter = Router();


const createTeacherHandler = (req, res) => {
  res.status(200).send(`CREA UN DOCENTE COORDINA`);
};

const createGroupHandler = (req, res) => {
  res.status(200).send(`CREA UN GRUPO POR COORDI`);
};


postCoordinatorsRouter.post("/teachers", createTeacherHandler);
postCoordinatorsRouter.post("/groups", createGroupHandler);

module.exports = postCoordinatorsRouter;