const { Router } = require("express");

const postAdminRouter = Router();

postAdminRouter.post("/coordinators/", (req, res) => {
  res.status(200).send(`crea un coordinador por admin`);
});

postAdminRouter.post("/contract/", (req, res) => {
  res.status(200).send(`crea un contrato por admin`);
});

postAdminRouter.post("/teachers", (req, res) => {
  res.status(200).send(`CREA UN DOCENTE por admin`);
});

postAdminRouter.post("/groups", (req, res) => {
  res.status(200).send(`CREA UN GRUPO por admin`);
});

module.exports = postAdminRouter;
