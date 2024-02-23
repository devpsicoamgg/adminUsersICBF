const { Family } = require("../../../3.-DataBase/dataBaseConfig.js");

console.log("3️⃣.-Controller 📤POST -TEACHERS-ROUTE-➡️ ", Family);

const createFamilyMemberByUser = async (userData, userId) => {
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
    edad,
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
    userId,
    firstName,
    firstLastName,
    kindDoc,
    numberDoc,
    birthDepartment,
    birthMunicipality,
    nataleDate,
    edad,
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
