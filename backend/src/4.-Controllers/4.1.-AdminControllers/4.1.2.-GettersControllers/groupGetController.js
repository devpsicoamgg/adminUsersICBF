const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("Controller 📥GET en ADMIN-ROUTE ➡️", Group, "y groupById");

const getAllGroups = async () => {
  try {
    const groups = await Group.findAll();
    return {
      success: true,
      data: groups,
    };
  } catch (error) {
    console.error("Error al obtener los grupos: " + error.message);
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
