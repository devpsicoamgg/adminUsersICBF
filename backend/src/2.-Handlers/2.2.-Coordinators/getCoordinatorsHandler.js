

const getContractByIdHandlerCoordinators = (req, res) => {
  const contractId = req.params.id;
  res.status(200).send(`Contrato No ${contractId} POR COORDI`);
};

const getAllUsersHandlerCoordinators = (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS POR COORDI`);
};

const getUserByIdHandlerCoordinators = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} POR COORDI`);
};

const getAllGroupsHandlerCoordinators = (req, res) => {
  res.status(200).send(`TODOS LOS GRUPOS POR COORDI`);
};

const getGroupByIdHandlerCoordinators = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} POR COORDI`);
};

const getAllTeachersHandlerCoordinators = (req, res) => {
  res.status(200).send(`TODOS LOS TEACHERS POR COORDI`);
};

const getTeacherByIdHandlerCoordinators = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Profesor no ${teacherId} POR COORDI`);
};


module.exports = {
getAllGroupsHandlerCoordinators, 
getAllUsersHandlerCoordinators, 
getUserByIdHandlerCoordinators, 
getContractByIdHandlerCoordinators, 
getGroupByIdHandlerCoordinators, 
getAllTeachersHandlerCoordinators, 
getTeacherByIdHandlerCoordinators,
}