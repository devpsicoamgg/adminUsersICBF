const {
  patchContract,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.3.-PatchersControllers/contractPtchController");

const {
  patchCoordinator,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.3.-PatchersControllers/coordinatorPtchController");

const {
  patchGroup,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.3.-PatchersControllers/groupPtchController");

const {
  patchCollaborator,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.3.-PatchersControllers/teacherPtchController");

const patchCoordinatorHandler = async (req, res) => {
  const coordinatorId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchCoordinator(coordinatorId, dataToUpdate);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchUserHandler = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} patcheado por admin`);
};

const patchGroupHandler = async (req, res) => {
  const groupId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchGroup(groupId, dataToUpdate);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchTeacherHandler = async (req, res) => {
  const teacherId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchCollaborator(teacherId, dataToUpdate);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchContractHandler = async (req, res) => {
  const contractId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchContract(contractId, dataToUpdate);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

module.exports = {
  patchCoordinatorHandler,
  patchUserHandler,
  patchGroupHandler,
  patchTeacherHandler,
  patchContractHandler,
};
