const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("Controller 📤POST en ADMIN-ROUTE ➡️", Group);

const createGroup = async (
  groupName,
  cuentameCode,
  address,
  municipality,
  neighborhood, 
  contractId, 
  coordinatorId,
) => {
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
