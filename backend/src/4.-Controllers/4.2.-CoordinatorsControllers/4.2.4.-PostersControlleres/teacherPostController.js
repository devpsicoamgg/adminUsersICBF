const {
  generateRandomPassword,
} = require("../../../5.-Utils/passwordUtils.js");

const { TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig.js");
const sendEmail = require("../../../6.-Mail/sendEmail.js");

console.log("Controller 📤POST en ADMIN-ROUTE ➡️", TeamIntervention);

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
  console.log("contractId:", contractId);
  console.log("coordinatorId:", coordinatorId);
  console.log("groupId:", groupId);

  if (!contractId || !coordinatorId || !groupId) {
    throw new Error("contractId, coordinatorId y groupId son obligatorios para crear un grupo");
  }

  const randomPassword = generateRandomPassword();

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
      password: randomPassword,
    });

    await sendEmail(
      email,
      `${firstName} te damos una cálida bienvenida`,
      `
      <p> ${firstName} Tu contraseña es: <strong style="background-color: #00FF00;">${randomPassword}</strong></p>
      Los datos de tu registro son:
      <p>Te damos la bienvenida al sistema. A continuación, encontrarás los detalles de tu registro:</p>
      <ul>
        <li>Nombre: ${firstName} ${secondName}</li>
        <li>Apellidos: ${firstLastName} ${secondLastName}</li>
        <li>Tipo de documento: ${kindDoc}</li>
        <li>Número de documento: ${numberDoc}</li>
        <li>Rol: ${role}</li>
        <li>Fecha de entrada: ${entryDate}</li>
        <li>Teléfono: ${phone}</li>
        <li>Correo electrónico: ${email}</li>
      </ul>
      
      <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
    `
    );

    return teamInterventionUser;
  } catch (error) {
    throw new Error("No se pudo crear el colaborador" + error);
  }
};


module.exports = { createTeamIntervention };
