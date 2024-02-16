const { Router } = require("express");

const patchCoordinatorsRouter = Router();



patchCoordinatorsRouter.patch("/users/:id", (req, res) => {
  const usersId = req.params.id;
  res.status(200).send(`Usuario no ${usersId} patcheado por coordi`);
});

patchCoordinatorsRouter.patch("/groups/:id", (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} patcheado por coordi`);
});

patchCoordinatorsRouter.patch("/teachers/:id", (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`teachers no ${teachersId} patcheado por coordi`);
});


module.exports = patchCoordinatorsRouter;
