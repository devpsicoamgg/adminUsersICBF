const createTeacherHandlerCoordinators = (req, res) => {
  res.status(200).send(`CREA UN DOCENTE COORDINA`);
};

const createGroupHandlerCoordinators = (req, res) => {
  res.status(200).send(`CREA UN GRUPO POR COORDI`);
};

module.exports = { 
  createGroupHandlerCoordinators, 
  createTeacherHandlerCoordinators,
}