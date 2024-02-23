const { UserFinal, Group, Contract, Coordinator, TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig.js");

console.log("3️⃣.-Controller 📤POST -TEACHERS-ROUTE-➡️ ", UserFinal);

const createFinalUser = async (userData) => {
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
    age,
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

  // Verifica la existencia de los IDs en sus tablas correspondientes
  const contractExists = await Contract.findByPk(contractId);
  const coordinatorExists = await Coordinator.findByPk(coordinatorId);
  const groupExists = await Group.findByPk(groupId);
  const teacherExists = await TeamIntervention.findByPk(teacherId);

  if (!contractExists) {
    throw new Error("El ID contractId no existe en su tabla correspondiente");
  }
  if (!coordinatorExists) {
    throw new Error("El ID coordinatorId no existe en su tabla correspondiente");
  }
  if (!groupExists) {
    throw new Error("El ID groupId no existe en su tabla correspondiente");
  }

  if (!teacherExists) {
    throw new Error("El ID teacherId no existe en su tabla correspondiente");
  }

  // Verifica si los campos obligatorios están presentes
  if (
    !contractId ||
    !coordinatorId ||
    !groupId ||
    !teacherId ||
    !firstName ||
    !firstLastName ||
    !kindDoc ||
    !numberDoc ||
    !birthDepartment ||
    !birthMunicipality ||
    !nataleDate ||
    !gender ||
    !healthSystemAffiliation ||
    !ethnicity ||
    !entryDate ||
    !maritalStatus ||
    !sisbenNumber ||
    !regimen ||
    !kindHealthSystem ||
    !occupation
  ) {
    throw new Error("Los campos obligatorios no pueden estar vacíos");
  }

  // Crea el usuario final
  const newUserFinal = await UserFinal.create({
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
    age,
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
  });

  return newUserFinal;
};

module.exports = { createFinalUser };
