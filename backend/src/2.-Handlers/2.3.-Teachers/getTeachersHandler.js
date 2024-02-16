const getAllCoordinatorsHandlerTeachers = (req, res) => {
  res.status(200).send(`Coordinadores todos teachers`);
};

const getAllUsersHandlerTeachers = (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS por teacher`);
};

const getUserByIdHandlerTeachers = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} por teacher`);
};

const getContractByIdHandlerTeachers = (req, res) => {
  const contractId = req.params.id;
  res.status(200).send(`Contrato No ${contractId} por techer`);
};

const getAllGroupsHandlerTeachers = (req, res) => {
  res.status(200).send(`TODOS LOS GRUPOS`);
};

const getGroupByIdHandlerTeachers = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} por profe`);
};

const getAllTeachersHandlerTeachers = (req, res) => {
  res.status(200).send(`TODOS LOS TEACHERS`);
};

module.exports = {
  getAllCoordinatorsHandlerTeachers,
  getAllUsersHandlerTeachers,
  getUserByIdHandlerTeachers,
  getContractByIdHandlerTeachers,
  getAllGroupsHandlerTeachers,
  getGroupByIdHandlerTeachers,
  getAllTeachersHandlerTeachers,
};
