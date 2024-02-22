const { UserFinal } = require("../../../3.-DataBase/dataBaseConfig.js");

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
    ...otherData
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

  return await UserFinal.create({
    ...otherData,
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
  });
};

module.exports = { createFinalUser };
