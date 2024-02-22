const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 📤POST -COORDI-ROUTE -➡️", Group);

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