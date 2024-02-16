const { Router } = require("express");

const getCoordinatorsRouter = Router();


const getContractByIdHandler = (req, res) => {
  const contractId = req.params.id;
  res.status(200).send(`Contrato No ${contractId} POR COORDI`);
};

const getAllUsersHandler = (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS POR COORDI`);
};

const getUserByIdHandler = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} POR COORDI`);
};

const getAllGroupsHandler = (req, res) => {
  res.status(200).send(`TODOS LOS GRUPOS POR COORDI`);
};

const getGroupByIdHandler = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} POR COORDI`);
};

const getAllTeachersHandler = (req, res) => {
  res.status(200).send(`TODOS LOS TEACHERS POR COORDI`);
};

const getTeacherByIdHandler = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Profesor no ${teacherId} POR COORDI`);
};



getCoordinatorsRouter.get("/contract/:id", getContractByIdHandler);
getCoordinatorsRouter.get("/users", getAllUsersHandler);
getCoordinatorsRouter.get("/users/:id", getUserByIdHandler );
getCoordinatorsRouter.get("/groups", getAllGroupsHandler );
getCoordinatorsRouter.get("/groups/:id", getGroupByIdHandler);
getCoordinatorsRouter.get("/teachers", getAllTeachersHandler);
getCoordinatorsRouter.get("/teachers/:id", getTeacherByIdHandler);


module.exports = getCoordinatorsRouter;
