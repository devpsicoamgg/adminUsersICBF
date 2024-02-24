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

const {
  patchAdministrativeAssistant,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.3.-PatchersControllers/administrativePtchController");

const {
  patchPsySocial,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.3.-PatchersControllers/psySocialPtchController");

const {
  patchInformationSystems,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.3.-PatchersControllers/cuentamePtchController");

const {
  patchNutritionist,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.3.-PatchersControllers/nutritionPtchController");


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

const patchPsyHandler = async (req, res) => {
  const psyId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchPsySocial(psyId, dataToUpdate);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchAdministrativeAssistantHandler = async (req, res) => {
  const administrativeAssistantId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchAdministrativeAssistant(administrativeAssistantId, dataToUpdate);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchCuentameHandler = async (req, res) => {
  const cuentameId = req.params.id;
  const dataToUpdate = req.body;

  const result = await   patchInformationSystems(cuentameId, dataToUpdate);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchNutriHandler = async (req, res) => {
  const nutryId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchNutritionist(nutryId, dataToUpdate);

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
  patchAdministrativeAssistantHandler,
  patchPsyHandler, 
  patchCuentameHandler, 
  patchNutriHandler,
};
