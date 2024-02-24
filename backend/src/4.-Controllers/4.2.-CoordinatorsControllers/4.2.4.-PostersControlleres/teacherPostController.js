const {
  generateRandomPassword,
} = require("../../../5.-Utils/passwordUtils.js");

const {
  TeamIntervention,
  Contract,
  Group,
  Coordinator,
} = require("../../../3.-DataBase/dataBaseConfig.js");
const sendEmail = require("../../../6.-Mail/sendEmail.js");
console.log("2️⃣.-Controller 📤POST -COORDI-ROUTE-➡️ ", TeamIntervention);

const createTeamIntervention = async ({
  firstName,
  secondName,
  firstLastName,
  secondLastName,
  kindDoc,
  numberDoc,
  nataleDate,
  age,
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
  console.log(age);
  if (!contractId || !coordinatorId || !groupId) {
    throw new Error(
      "contractId, coordinatorId y groupId son obligatorios para crear un grupo"
    );
  }

  const contractExists = await Contract.findByPk(contractId);
  const coordinatorExists = await Coordinator.findByPk(coordinatorId);
  const groupExists = await Group.findByPk(groupId);

  if (!contractExists) {
    throw new Error("El ID contractId no existe en su tabla correspondiente");
  }
  if (!coordinatorExists) {
    throw new Error(
      "El ID coordinatorId no existe en su tabla correspondiente"
    );
  }
  if (!groupExists) {
    throw new Error("El ID groupId no existe en su tabla correspondiente");
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
      age,
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
      <table border="1">
      <tr>
          <td><b>Nombre:</b></td>
          <td>${firstName} ${secondName}</td>
      </tr>
      <tr>
          <td><b>Apellidos:</b></td>
          <td>${firstLastName} ${secondLastName}</td>
      </tr>
      <tr>
          <td><b>Tipo de documento:</b></td>
          <td>${kindDoc}</td>
      </tr>
      <tr>
          <td><b>Número de documento:</b></td>
          <td>${numberDoc}</td>
      </tr>
      <tr>
          <td><b>Rol:</b></td>
          <td>${role}</td>
      </tr>
      <tr>
          <td><b>Fecha de entrada:</b></td>
          <td>${entryDate}</td>
      </tr>
      <tr>
          <td><b>Teléfono:</b></td>
          <td>${phone}</td>
      </tr>
      <tr>
          <td><b>Correo electrónico:</b></td>
          <td>${email}</td>
      </tr>
  </table>
  
      
      <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
    `
    );

    return teamInterventionUser;
  } catch (error) {
    throw new Error("No se pudo crear el colaborador" + error);
  }
};

module.exports = { createTeamIntervention };
