const {
  Group,
  Contract,
  Coordinator,
} = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 📤POST -COORDI-ROUTE-➡️ ", Group);

const createGroup = async (
  groupName,
  cuentameCode,
  address,
  municipality,
  neighborhood,
  contractId,
  coordinatorId
) => {
  if (!contractId || !coordinatorId) {
    throw new Error(
      "contractId y coordinatorId son obligatorios para crear un grupo"
    );
  }

  const contractExists = await Contract.findByPk(contractId);
  const coordinatorExists = await Coordinator.findByPk(coordinatorId);


  if (!contractExists) {
    throw new Error("El ID contractId no existe en su tabla correspondiente");
  }
  if (!coordinatorExists) {
    throw new Error("El ID coordinatorId no existe en su tabla correspondiente");
  }

  return await Group.create({
    groupName,
    cuentameCode,
    address,
    municipality,
    neighborhood,
    contractId,
    coordinatorId,
  });
};

module.exports = { createGroup };
