const { Router } = require("express");

const delCoordinatorsRouter = Router();



delCoordinatorsRouter.delete("/groups/:id", (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} eliminado por coordi`);
});

delCoordinatorsRouter.delete("/teachers/:id", (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`teachers no ${teachersId} eliminado por coordi`);
});

delCoordinatorsRouter.delete("/users/:id", (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`Usuario no ${teachersId} eliminado por coordi`);
});


module.exports = delCoordinatorsRouter;
