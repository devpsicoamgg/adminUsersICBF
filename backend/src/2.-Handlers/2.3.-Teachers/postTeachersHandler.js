const {
  createFinalUser,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.3.-PostersControlleres/teacherPostController");

const {
  createFamilyMemberByUser,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.3.-PostersControlleres/FamilyMemberPostController");

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
      occupation,
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
      age,
    });

    res.status(200).send(response);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(400).json({ error: error.message, error });
  }
};

const createFamilyMemberHandlerTeachers = async (req, res) => {
  try {
    const userData = req.body;
    const userFinalId = req.params.id;
    console.log(userFinalId, "handler user final id")
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
      occupation,
      finalUserRelationship,
    } = userData;

    const birthDate = new Date(nataleDate);
    const today = new Date();
    const diff = today.getTime() - birthDate.getTime();
    const ageDate = new Date(diff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const response = await createFamilyMemberByUser({
      contractId,
      coordinatorId,
      groupId,
      teacherId,
      userFinalId,
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
      age,
      finalUserRelationship,
    });

    res.status(200).send(response);
  } catch (error) {
    console.error("Error al crear el familiar:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUserHandlerTeachers,
  createFamilyMemberHandlerTeachers,
};
