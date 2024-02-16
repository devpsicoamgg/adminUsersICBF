const { Router } = require("express");

const getAdminRouter = Router();

getAdminRouter.get("/coordinators/", (req, res) => {
  res.status(200).send(`Coordinadores todos por admin`);
});

getAdminRouter.get("/coordinators/:id", (req, res) => {
  const coordinatorId = req.params.id;
  res.status(200).send(`Coordinador No ${coordinatorId} por admin`);
});

getAdminRouter.get("/users", (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS por admin`);
});

getAdminRouter.get("/contract", (req, res) => {
  res.status(200).send(`TODOS LOS contratos por admin`);
});

getAdminRouter.get("/contract/:id", (req, res) => {
  const contractsId = req.params.id;
  res.status(200).send(`Contrato No ${contractsId} `);
});

getAdminRouter.get("/users/:id", (req, res) => {
  const usersId = req.params.id;
  res.status(200).send(`Usuario no ${usersId}`);
});

getAdminRouter.get("/groups", (req, res) => {
  res.status(200).send(`TODOS LOS GRUPOS`);
});

getAdminRouter.get("/groups/:id", (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId}`);
});

getAdminRouter.get("/teachers/:id", (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`teachers no ${teachersId}`);
});

getAdminRouter.get("/teachers", (req, res) => {
  res.status(200).send(`TODOS LOS TEACHERS`);
});

module.exports = getAdminRouter;
