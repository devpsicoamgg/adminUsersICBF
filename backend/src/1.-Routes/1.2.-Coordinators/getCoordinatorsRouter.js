const { Router } = require("express");

const getCoordinatorsRouter = Router();

getCoordinatorsRouter.get("/contract/:id", (req, res) => {
  const contractsId = req.params.id;
  res.status(200).send(`Contrato No ${contractsId} POR COORDI`);
});

getCoordinatorsRouter.get("/users", (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS POR COORDI`);
});

getCoordinatorsRouter.get("/users/:id", (req, res) => {
  const usersId = req.params.id;
  res.status(200).send(`Usuario no ${usersId} POR COORDI`);
});

getCoordinatorsRouter.get("/groups", (req, res) => {
  res.status(200).send(`TODOS LOS GRUPOS POR COORDI`);
});

getCoordinatorsRouter.get("/groups/:id", (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} POR COORDI`);
});

getCoordinatorsRouter.get("/teachers", (req, res) => {
  res.status(200).send(`TODOS LOS TEACHERS POR COORDI`);
});

getCoordinatorsRouter.get("/teachers/:id", (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`teachers no ${teachersId} POR COORDI`);
});


module.exports = getCoordinatorsRouter;
