const { Router } = require("express");

const postTeachersRouter = Router();


postTeachersRouter.post("/users", (req, res) => {
  res.status(200).send(`CREA UN usuario por profe`);
});


module.exports = postTeachersRouter;