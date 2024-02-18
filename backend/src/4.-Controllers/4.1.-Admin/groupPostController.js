const { Group } = require("../../3.-DataBase/dataBaseConfig");

console.log("Tabla de grupo levantada", Group);

const createGroup = async (
  groupName, 
  cuentameCode, 
  address, 
  municipality, 
  neighborhood 
) => {
  return await Group.create({
    groupName, 
    cuentameCode, 
    address, 
    municipality, 
    neighborhood 
  });
};

module.exports = { createGroup };
