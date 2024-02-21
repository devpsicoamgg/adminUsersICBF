const {
  patchCoordinator,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.3.-PatchersControllers/coordinatorPtchController");


const {
  patchGroupByCoordi,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.3.-PatchersControllers/groupPtchController");


const {
  patchCollaboratorByCoordi,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.3.-PatchersControllers/teacherPtchController");



const patchCoordinatorHandlerCoordinators = async (req, res) => {
  const coordinatorId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchCoordinator(coordinatorId, dataToUpdate);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: result.message });
  }
};


const patchUserHandlerCoordinators = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} patcheado por coordi`);
};

const patchGroupHandlerCoordinators = async (req, res) => {
  const groupId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchGroupByCoordi(groupId, dataToUpdate);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: result.message });
  }
};

const patchTeacherHandlerCoordinators = async (req, res) => {
  const teacherId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchCollaboratorByCoordi(teacherId, dataToUpdate);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: result.message });
  }
};

module.exports = { 
  patchUserHandlerCoordinators, 
  patchGroupHandlerCoordinators, 
  patchTeacherHandlerCoordinators, 
  patchCoordinatorHandlerCoordinators,
}