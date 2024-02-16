const { Router } = require("express");

const patchTeacherRouter = Router();

patchTeacherRouter.patch("/users/:id", (req, res) => {
  const usersId = req.params.id;
  res.status(200).send(`Usuario no ${usersId} patcheado por teacher`);
});

patchTeacherRouter.patch("/groups/:id", (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} patcheado por teacher`);
});

patchTeacherRouter.patch("/teachers/:id", (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`teachers no ${teachersId} patcheado por teacher`);
});


module.exports = patchTeacherRouter;
