const {
  patchAdministrativeAssistantBySelf,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.2.-PatchersControllers/administrativePtchController");


const patchUserHandlerTeachers = (req, res) => {
  const usersId = req.params.id;
  res.status(200).send(`Usuario no ${usersId} patcheado por teacher`);
};

const patchGroupHandlerTeachers = (req, res) => {
  const groupsId = req.params.id;
  res.status(200).send(`Grupo no ${groupsId} patcheado por teacher`);
};

const patchTeacherHandlerTeachers = (req, res) => {
  const teachersId = req.params.id;
  res.status(200).send(`teachers no ${teachersId} patcheado por teacher`);
};


const patchAdministrativeAssistantHandler = async (req, res) => {
  const administrativeAssistantId = req.params.id;
  const dataToUpdate = req.body;

  const result = await patchAdministrativeAssistantBySelf(administrativeAssistantId, dataToUpdate);

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

}