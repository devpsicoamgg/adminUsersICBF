const { Router } = require("express");

const postTeachersRouter = Router();


const createUserHandler = (req, res) => {
  res.status(200).send(`CREA UN usuario por profe`);
};


postTeachersRouter.post("/users", createUserHandler);


module.exports = postTeachersRouter;