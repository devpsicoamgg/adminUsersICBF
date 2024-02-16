const { Router } = require("express");

const getTeachersRouter = Router();


const getAllCoordinatorsHandler = (req, res) => {
  res.status(200).send(`Coordinadores todos teachers`);
};

const getAllUsersHandler = (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS por teacher`);
};

const getUserByIdHandler = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} por teacher`);
};

const getContractByIdHandler = (req, res) => {
  const contractId = req.params.id;
  res.status(200).send(`Contrato No ${contractId} por techer`);
};

const getAllGroupsHandler = (req, res) => {
  res.status(200).send(`TODOS LOS GRUPOS`);
};

const getGroupByIdHandler = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} por profe`);
};

const getAllTeachersHandler = (req, res) => {
  res.status(200).send(`TODOS LOS TEACHERS`);
};



getTeachersRouter.get("/coordinators/", getAllCoordinatorsHandler);
getTeachersRouter.get("/users", getAllUsersHandler);
getTeachersRouter.get("/users/:id", getUserByIdHandler);
getTeachersRouter.get("/contract/:id", getContractByIdHandler);
getTeachersRouter.get("/groups", getAllGroupsHandler);
getTeachersRouter.get("/groups/:id", getGroupByIdHandler);
getTeachersRouter.get("/teachers", getAllTeachersHandler);

module.exports = getTeachersRouter;
