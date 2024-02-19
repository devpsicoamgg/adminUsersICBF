const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("Controller 📥GET en ADMIN-ROUTE ➡️", Group, "y groupById");

const getAllGroups = = async (contractId) => {
  try {
    const coordinators = await Group.findAll({
      where: { contractId: contractId },
      attributes: [
        'id',
        'firstName',
        'secondName',
        'firstLastName',
        'secondLastName',
        'nataleDate',
        'phone',
        'email'
      ]
    });
    return {
      success: true,
      data: coordinators,
    };
  } catch (error) {
    console.error("Error al obtener los coordinadores: " + error.message);
    return { success: false, message: "Internal several error" };
  }
};

const getGroupById = async (groupId) => {
  try {
    const group = await Group.findByPk(groupId);

    if (!group) {
      return {
        success: false,
        message: `Grupo con ID ${groupId} no encontrado`,
      };
    }

    return {
      success: true,
      data: group,
    };
  } catch (error) {
    console.error("Error al obtener el coordinador con ID: " + error.message);
    return { success: false, message: "Internal server error" };
  }
};

module.exports = { getAllGroups, getGroupById };
