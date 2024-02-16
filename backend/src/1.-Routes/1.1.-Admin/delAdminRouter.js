const { Router } = require("express");

const delAdminRouter = Router();



delAdminRouter.delete("/coordinators/:id", (req, res) => {
  const coordinatorId = req.params.id;
  res.status(200).send(`Coordinador No ${coordinatorId} eliminado por admin `);
});


delAdminRouter.delete("/groups/:id", (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} eliminado por admin`);
});

delAdminRouter.delete("/teachers/:id", (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`teachers no ${teachersId} eliminado por admin`);
});


module.exports = delAdminRouter;