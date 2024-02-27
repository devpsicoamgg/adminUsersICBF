const {
  Family,
  Contract,
  Coordinator,
  Group,
  TeamIntervention,
  UserFinal,
} = require("../../../3.-DataBase/dataBaseConfig.js");

console.log("3️⃣.-Controller 📤POST -TEACHERS-ROUTE-➡️ ", Family);

const createFamilyMemberByUser = async (userData) => {
  const {
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
    finalUserRelationship,
  } = userData;

  // Verificar la existencia de los IDs en las tablas correspondientes
  const contractExists = await Contract.findByPk(contractId);
  const coordinatorExists = await Coordinator.findByPk(coordinatorId);
  const groupExists = await Group.findByPk(groupId);
  const teacherExists = await TeamIntervention.findByPk(teacherId);
  const userFinalExists = await UserFinal.findByPk(userFinalId);



  // Si algún ID no existe, lanzar un error
  if (!contractExists || !coordinatorExists || !groupExists || !teacherExists || !userFinalExists) {
    throw new Error(
      "Alguno de los IDs proporcionados no existe en su tabla correspondiente"
    );
  }

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



  return await Family.create({
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
    finalUserRelationship,
  });
};

module.exports = { createFamilyMemberByUser };
