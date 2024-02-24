const {
  generateRandomPassword,
} = require("../../../5.-Utils/passwordUtils.js");
const { HealthAndNutrition, Contract, Coordinator } = require("../../../3.-DataBase/dataBaseConfig.js");
const sendEmail = require("../../../6.-Mail/sendEmail.js");

console.log("1️⃣.-Controller 📤POST -ADMIN-ROUTE-➡️ ", HealthAndNutrition);

const createHealthAndNutrition = async (
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
  coordinatorId,
  contractId, 
) => {
  const randomPassword = generateRandomPassword();

  try {
    const healthAndNutritionUser = await HealthAndNutrition.create({
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
      password: randomPassword,
      coordinatorId,
      contractId
    });

    if (!contractId || !coordinatorId ) {
      throw new Error(
        "contractId, coordinatorId group son obligatorios para crear un docente"
      );
    }

    const contractExists = await Contract.findByPk(contractId);
    const coordinatorExists = await Coordinator.findByPk(coordinatorId);


    if (!contractExists) {
      throw new Error("El ID contractId no existe en la tabla correspondiente");
  } 
  if (!coordinatorExists) {
      throw new Error("El ID coordinatorId no existe en la tabla correspondiente");
  }


    await sendEmail(
      email,
      `${firstName} te damos una cálida bienvenida`,
      `
      <p>Te damos la bienvenida al sistema. A continuación, encontrarás los detalles de tu registro:</p>
      <ul>
          <li><b> Nombre:</b> ${firstName} ${secondName}</li>
          <li><b>Apellidos:</b> ${firstLastName} ${secondLastName}</li>
          <li><b>Tipo de documento:</b> ${kindDoc}</li>
          <li><b>Número de documento:</b> ${numberDoc}</li>
          <li><b>Rol:</b> ${role}</li>
          <li><b>Fecha de entrada:</b> ${entryDate}</li>
          <li><b>Teléfono:</b> ${phone}</li>
          <li><b>Correo electrónico:</b> ${email}</li>
      </ul>

      <p>Tu contraseña es: </b>
      <strong style="
      padding: 8px; 
      border-radius: 8px; 
      color: #ffffff; 
      display: inline-block; 
      margin-top: 10px; 
      background-color:  #3498db; 
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      font-size: 18px;
      font-weight: bold;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
      ">
          ${randomPassword}
      </strong>
  </p>

      <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
      `
    );

    return healthAndNutritionUser;
  } catch (error) {
    throw new Error("No se pudo crear el colaborador " + error);
  }
};

module.exports = { createHealthAndNutrition };
