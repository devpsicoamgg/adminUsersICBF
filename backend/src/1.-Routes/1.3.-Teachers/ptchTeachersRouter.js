const { Router } = require("express");

const patchTeacherRouter = Router();

const patchUserHandler = (req, res) => {
  const usersId = req.params.id;
  res.status(200).send(`Usuario no ${usersId} patcheado por teacher`);
};

const patchGroupHandler = (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} patcheado por teacher`);
};

const patchTeacherHandler = (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`teachers no ${teachersId} patcheado por teacher`);
};


patchTeacherRouter.patch("/users/:id", patchUserHandler);
patchTeacherRouter.patch("/groups/:id", patchGroupHandler);
patchTeacherRouter.patch("/teachers/:id", patchTeacherHandler);


module.exports = patchTeacherRouter;
