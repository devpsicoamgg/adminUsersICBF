const { Router } = require("express");

const postCoordinatorsRouter = Router();


postCoordinatorsRouter.post("/teachers", (req, res) => {
  res.status(200).send(`CREA UN DOCENTE COORDINA`);
});

postCoordinatorsRouter.post("/groups", (req, res) => {
  res.status(200).send(`CREA UN GRUPO POR COORDI`);
});

module.exports = postCoordinatorsRouter;