const delAdminHandlerCoordinator = (req, res) => {
  const coordinatorId = req.params.id;
  res.status(200).send(`Coordinador No ${coordinatorId} eliminado por admin`);
};

const delAdminHandlerGroup = (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} eliminado por admin`);
};

const delAdminHandlerTeacher = (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`Profesor no ${teachersId} eliminado por admin`);
};

module.exports = {
  delAdminHandlerCoordinator,
  delAdminHandlerGroup,
  delAdminHandlerTeacher,
};
