const {
  createFinalUser,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.3.-PostersControlleres/teacherPostController");

const createUserHandlerTeachers = async (req, res) => {
  try {
    const userData = req.body;
    const {
      contractId,
      coordinatorId,
      groupId,
      teacherId,
      firstName,
      firstLastName,
      kindDoc,
      numberDoc,
      birthDepartment,
      birthMunicipality,
      nataleDate,
      disability,
      gender,
      healthSystemAffiliation,
      ethnicity,
      entryDate,
      maritalStatus,
      sisbenNumber,
      regimen,
      kindHealthSystem,
      occupation
    } = userData;

    const birthDate = new Date(nataleDate);
    const today = new Date();
    const diff = today.getTime() - birthDate.getTime();
    const ageDate = new Date(diff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const response = await createFinalUser({
      contractId,
      coordinatorId,
      groupId,
      teacherId,
      firstName,
      firstLastName,
      kindDoc,
      numberDoc,
      birthDepartment,
      birthMunicipality,
      nataleDate,
      disability,
      gender,
      healthSystemAffiliation,
      ethnicity,
      entryDate,
      maritalStatus,
      sisbenNumber,
      regimen,
      kindHealthSystem,
      occupation,
      age 
    });

    res.status(200).send(response);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUserHandlerTeachers,
};
