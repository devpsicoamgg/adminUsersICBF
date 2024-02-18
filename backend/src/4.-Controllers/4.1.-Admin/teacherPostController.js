const { generateRandomPassword } = require("../../5.-Utils/passwordUtils.js");
const { TeamIntervention } = require("../../3.-DataBase/dataBaseConfig");
const sendEmail = require("../../6.-Mail/sendEmail.js");

const createTeamIntervention = async (
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
  coordinatorId
) => {
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
      password: randomPassword,
      coordinatorId,
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
    console.error("Error al crear el colaborador:", error);
    throw new Error("No se pudo crear el colaborador");
  }
};

module.exports = { createTeamIntervention };
