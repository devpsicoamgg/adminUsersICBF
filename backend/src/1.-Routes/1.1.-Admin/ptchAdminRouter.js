const { Router } = require("express");

const patchAdminRouter = Router();



patchAdminRouter.patch("/coordinators/:id", (req, res) => {
  const coordinatorId = req.params.id;
  res.status(200).send(`Coordinador No ${coordinatorId} patcheado por admin`);
});



patchAdminRouter.patch("/users/:id", (req, res) => {
  const usersId = req.params.id;
  res.status(200).send(`Usuario no ${usersId} patcheado por admin`);
});



patchAdminRouter.patch("/groups/:id", (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} patcheado por admin`);
});

patchAdminRouter.patch("/teachers/:id", (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`teachers no ${teachersId} patcheado por admin`);
});


patchAdminRouter.patch("/contract/:id", (req, res) => {
  const contractId = req.params.id;
  res.status(200).send(`Contrato no ${contractId} patcheado por admin`);
});


module.exports = patchAdminRouter;
