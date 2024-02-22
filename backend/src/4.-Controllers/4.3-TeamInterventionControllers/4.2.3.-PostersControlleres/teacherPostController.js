

const { TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig.js");

console.log("2️⃣.-Controller 📤POST -COORDI-ROUTE-➡️ ", TeamIntervention);

const createTeamIntervention = async ({
  firstName,
  secondName,
  firstLastName,
  secondLastName,
  kindDoc,
  numberDoc,
  nataleDate,
  edad,
  gender,
  entryDate,
  phone,
  email,
  role,
  updatedAt,
  createdAt,
  birthDepartment,
  birthMunicipality,
  maritalStatus,
  healthSystemAffiliation,
  regimen,
  kindHealthSystem,
  ethnicity,
  reasonForLeaving,
  exitDate,
  maxEducationalLevel,
  kindFormation,
  typeOfFormation,
  lastYearHighSchool,
  highSchoolCompletionDate,
  university,
  lastLevelEducationDate,
  postgraduateTitle,
  trainingNeeds,
  experienceWorkingEarlyChildhood,
  accessToGoodsServices,
  computer,
  internetAccess,
  contractType,
  communityMother,
  healthSocialSecurity,
  eps,
  arl,
  pensionFund,
  compensationFund,
  imgDoc,
  coordinatorId,
  contractId,
  groupId,
}) => {
  console.log(edad);
  if (!contractId || !coordinatorId || !groupId) {
    throw new Error(
      "contractId, coordinatorId y groupId son obligatorios para crear un grupo"
    );
  }

  try {
    const teamInterventionUser = await TeamIntervention.create({
      firstName,
      secondName,
      firstLastName,
      secondLastName,
      kindDoc,
      numberDoc,
      nataleDate,
      edad,
      gender,
      entryDate,
      phone,
      email,
      role,
      updatedAt,
      createdAt,
      birthDepartment,
      birthMunicipality,
      maritalStatus,
      healthSystemAffiliation,
      regimen,
      kindHealthSystem,
      ethnicity,
      reasonForLeaving,
      exitDate,
      maxEducationalLevel,
      kindFormation,
      typeOfFormation,
      lastYearHighSchool,
      highSchoolCompletionDate,
      university,
      lastLevelEducationDate,
      postgraduateTitle,
      trainingNeeds,
      experienceWorkingEarlyChildhood,
      accessToGoodsServices,
      computer,
      internetAccess,
      contractType,
      communityMother,
      healthSocialSecurity,
      eps,
      arl,
      pensionFund,
      compensationFund,
      imgDoc,
      coordinatorId,
      contractId,
      groupId,
    });

 

    return teamInterventionUser;
 
};

module.exports = { createTeamIntervention };
