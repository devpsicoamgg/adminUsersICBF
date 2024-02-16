const deleteGroupHandlerCoordinators = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} eliminado por coordi`);
};

const deleteTeacherHandlerCoordinators = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Profesor no ${teacherId} eliminado por coordi`);
};

const deleteUserHandlerCoordinators = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} eliminado por coordi`);
};

module.exports = {
  deleteGroupHandlerCoordinators,
  deleteTeacherHandlerCoordinators,
  deleteUserHandlerCoordinators,
}