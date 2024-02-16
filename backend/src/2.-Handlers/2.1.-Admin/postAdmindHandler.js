const createCoordinatorHandler = (req, res) => {
  res.status(200).send(`Crear un coordinador por admin`);
};

const createContractHandler = (req, res) => {
  res.status(200).send(`Crear un contrato por admin`);
};

const createTeacherHandler = (req, res) => {
  res.status(200).send(`Crear un docente por admin`);
};

const createGroupHandler = (req, res) => {
  res.status(200).send(`Crear un grupo por admin`);
};


module.exports = {
  createCoordinatorHandler, 
  createContractHandler, 
  createTeacherHandler, 
  createGroupHandler
}