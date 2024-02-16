const patchUserHandlerCoordinators = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} patcheado por coordi`);
};

const patchGroupHandlerCoordinators = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} patcheado por coordi`);
};

const patchTeacherHandlerCoordinators = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Teacher no ${teacherId} patcheado por coordi`);
};

module.exports = { 
  patchUserHandlerCoordinators, 
  patchGroupHandlerCoordinators, 
  patchTeacherHandlerCoordinators, 
}