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


module.exports = {
  patchUserHandlerTeachers,
  patchGroupHandlerTeachers,
  patchTeacherHandlerTeachers,

}