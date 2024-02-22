const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🚚GET -COORDI-ROUTE-➡️ ", Group, "y groupById");

const getAllGroups = async (coordinatorId) => {
  try {
    const groups = await Group.findAll({
      where: { coordinatorId: coordinatorId },
    });
    return {
      success: true,
      data: groups,
    };
  } catch (error) {
    console.error("Error al obtener los grupos");
    return {
      success: false,
      message: "Error interno del servidor" + error.message + coordinatorId,
    };
  }
};

const getGroupById = async (groupId, coordinatorId) => {
  try {
    const group = await Group.findByPk(groupId);

    if (!group) {
      return {
        success: false,
        message: `Grupo con ID ${groupId} no encontrado`,
      };
    }

    if (group.coordinatorId !== coordinatorId) {
      return {
        success: false,
        message: `El grupo con ID ${groupId} no pertenece al coordinador con ID ${coordinatorId}`,
      };
    }

    return {
      success: true,
      data: group,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error interno del servidor: " + error.message,
    };
  }
};

module.exports = { getAllGroups, getGroupById };
