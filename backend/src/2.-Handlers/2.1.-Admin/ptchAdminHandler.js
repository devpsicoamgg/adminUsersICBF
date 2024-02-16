const patchCoordinatorHandler = (req, res) => {
  const coordinatorId = req.params.id;
  res.status(200).send(`Coordinador No ${coordinatorId} patcheado por admin`);
};

const patchUserHandler = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} patcheado por admin`);
};

const patchGroupHandler = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} patcheado por admin`);
};

const patchTeacherHandler = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Profesor no ${teacherId} patcheado por admin`);
};

const patchContractHandler = (req, res) => {
  const contractId = req.params.id;
  res.status(200).send(`Contrato no ${contractId} patcheado por admin`);
};


module.exports = {
  patchCoordinatorHandler, 
  patchUserHandler, 
  patchGroupHandler, 
  patchTeacherHandler, 
  patchContractHandler
}