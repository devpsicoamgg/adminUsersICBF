const getCoordinatorsHandlerAdmin = (req, res) => {
  res.status(200).send(`Obtener todos los coordinadores por admin`);
};

const getCoordinatorByIdHandlerAdmin = (req, res) => {
  const coordinatorId = req.params.id;
  res.status(200).send(`Obtener coordinador No ${coordinatorId} por admin`);
};

const getUsersHandlerAdmin = (req, res) => {
  res.status(200).send(`Obtener todos los usuarios por admin`);
};

const getContractsHandlerAdmin = (req, res) => {
  res.status(200).send(`Obtener todos los contratos por admin`);
};

const getContractByIdHandlerAdmin = (req, res) => {
  const contractId = req.params.id;
  res.status(200).send(`Obtener contrato No ${contractId} por admin`);
};

const getUserByIdHandlerAdmin = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Obtener usuario No ${userId}`);
};

const getGroupsHandlerAdmin = (req, res) => {
  res.status(200).send(`Obtener todos los grupos`);
};

const getGroupByIdHandlerAdmin = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Obtener grupo No ${groupId}`);
};

const getTeachersByIdHandlerAdmin = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Obtener profesor No ${teacherId}`);
};

const getTeachersHandlerAdmin = (req, res) => {
  res.status(200).send(`Obtener todos los profesores`);
};

module.exports = {
  getCoordinatorsHandlerAdmin,
  getCoordinatorByIdHandlerAdmin,
  getUsersHandlerAdmin,
  getContractsHandlerAdmin, 
  getContractByIdHandlerAdmin, 
  getUserByIdHandlerAdmin,
  getGroupsHandlerAdmin,
 getGroupByIdHandlerAdmin, 
  getTeachersByIdHandlerAdmin, 
  getTeachersHandlerAdmin,
};