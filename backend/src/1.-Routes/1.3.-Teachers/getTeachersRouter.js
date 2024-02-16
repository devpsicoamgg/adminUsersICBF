const { Router } = require("express");

const getTeachersRouter = Router();

getTeachersRouter.get("/coordinators/", (req, res) => {
  res.status(200).send(`Coordinadores todos teachers`);
});

getTeachersRouter.get("/users", (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS por teacher`);
});

getTeachersRouter.get("/users/:id", (req, res) => {
  const usersId = req.params.id;
  res.status(200).send(`Usuario no ${usersId} por teacher`);
});

getTeachersRouter.get("/contract/:id", (req, res) => {
  const contractsId = req.params.id;
  res.status(200).send(`Contrato No ${contractsId} por techer`);
});

getTeachersRouter.get("/groups", (req, res) => {
  res.status(200).send(`TODOS LOS GRUPOS`);
});

getTeachersRouter.get("/groups/:id", (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} por profe`);
});

getTeachersRouter.get("/teachers", (req, res) => {
  res.status(200).send(`TODOS LOS TEACHERS`);
});

module.exports = getTeachersRouter;
