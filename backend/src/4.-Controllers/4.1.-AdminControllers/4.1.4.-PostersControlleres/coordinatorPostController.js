const {
  generateRandomPassword,
} = require("../../../5.-Utils/passwordUtils.js");
const {
  Coordinator,
  Contract,
} = require("../../../3.-DataBase/dataBaseConfig.js");
const sendEmail = require("../../../6.-Mail/sendEmail.js");

console.log("1️⃣.-Controller 📤POST -ADMIN-ROUTE-➡️ ", Coordinator);

const createCoordinator = async (
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
  contractId
) => {
  if (!contractId) {
    throw new Error("contractId son obligatorios para crear un grupo");
  }

  const contractExists = await Contract.findByPk(contractId);

  if (!contractExists) {
    throw new Error("Contrato no existe");
  }
  const randomPassword = generateRandomPassword();

  try {
    const coordinator = await Coordinator.create({
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
      contractId,
    });

    await sendEmail(
      email,
      `${firstName} te damos una cálida bienvenida`,
      `
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

    return coordinator;
  } catch (error) {
    throw new Error("No se pudo crear el coordinador" + error);
  }
};

module.exports = { createCoordinator };
