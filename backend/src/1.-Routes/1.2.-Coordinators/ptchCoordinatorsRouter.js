const { Router } = require("express");

const patchCoordinatorsRouter = Router();

const patchUserHandler = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} patcheado por coordi`);
};

const patchGroupHandler = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} patcheado por coordi`);
};

const patchTeacherHandler = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Teacher no ${teacherId} patcheado por coordi`);
};


patchCoordinatorsRouter.patch("/users/:id", patchUserHandler);
patchCoordinatorsRouter.patch("/groups/:id", patchGroupHandler);
patchCoordinatorsRouter.patch("/teachers/:id", patchTeacherHandler);

module.exports = patchCoordinatorsRouter;
