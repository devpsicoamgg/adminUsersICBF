const { Router } = require("express");

const delCoordinatorsRouter = Router();

const deleteGroupHandler = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} eliminado por coordi`);
};

const deleteTeacherHandler = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Profesor no ${teacherId} eliminado por coordi`);
};

const deleteUserHandler = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} eliminado por coordi`);
};


delCoordinatorsRouter.delete("/groups/:id", deleteGroupHandler);
delCoordinatorsRouter.delete("/teachers/:id", deleteTeacherHandler);
delCoordinatorsRouter.delete("/users/:id", deleteUserHandler);


module.exports = delCoordinatorsRouter;
