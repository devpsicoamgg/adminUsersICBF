const {
  patchAdministrativeAssistantBySelf,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.2.-PatchersControllers/administrativePtchController");

const {
  patchInformationSystemsBySelf,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.2.-PatchersControllers/cuentamePtchController");

const {
  patchNutriBySelf,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.2.-PatchersControllers/nutritionPtchController");

const {
  patchTeacherBySelf,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.2.-PatchersControllers/teacherPtchController");

const {
  patchGroupByTeacher,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.2.-PatchersControllers/groupPtchController");

const {
  patchUserByTeacher,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.2.-PatchersControllers/finalUserPtchController");


const patchUserHandlerTeachers = async (req, res) => {
  const userId = req.params.id;
  const dataToUpdate = req.body;
  
  const birthDate = new Date(dataToUpdate.nataleDate);
  const today = new Date();
  const diff = today.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
  dataToUpdate.age = age;

  const result = await patchUserByTeacher(userId, dataToUpdate);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message });
  }
};


const patchGroupHandlerTeachers = async (req, res) => {
  const groupId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchGroupByTeacher(
    groupId,
    dataToUpdate
  );

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchAdministrativeAssistantHandler = async (req, res) => {
  const administrativeAssistantId = req.params.id;
  const dataToUpdate = req.body;

  const birthDate = new Date(dataToUpdate.nataleDate);
  const today = new Date();
  const diff = today.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
  dataToUpdate.age = age;

  const result = await patchAdministrativeAssistantBySelf(
    administrativeAssistantId,
    dataToUpdate
  );

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchCuentameHandler = async (req, res) => {
  const cuentameId = req.params.id;
  const dataToUpdate = req.body;

  const birthDate = new Date(dataToUpdate.nataleDate);
  const today = new Date();
  const diff = today.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
  dataToUpdate.age = age;

  const result = await patchInformationSystemsBySelf(
    cuentameId,
    dataToUpdate
  );

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchNutriHandler = async (req, res) => {
  const nutriId = req.params.id;
  const dataToUpdate = req.body;

  const birthDate = new Date(dataToUpdate.nataleDate);
  const today = new Date();
  const diff = today.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
  dataToUpdate.age = age;

  const result = await patchNutriBySelf(
    nutriId,
    dataToUpdate
  );

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};

const patchTeacherHandlerTeachers = async (req, res) => {
  const teacherId = req.params.id;
  const dataToUpdate = req.body;

  const birthDate = new Date(dataToUpdate.nataleDate);
  const today = new Date();
  const diff = today.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
  dataToUpdate.age = age;

  const result = await patchTeacherBySelf (
    teacherId,
    dataToUpdate
  );

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: result.message, result });
  }
};


module.exports = {
  patchUserHandlerTeachers,
  patchGroupHandlerTeachers,
  patchTeacherHandlerTeachers,
  patchAdministrativeAssistantHandler,
  patchCuentameHandler,
  patchNutriHandler,
};
