const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("1️⃣.-Controller 🚚GET -ADMIN-ROUTE-➡️ ", Group, "y groupById");

const getAllGroups = async () => {
  try {
    const groups = await Group.findAll();
    return {
      success: true,
      data: groups,
    };
  } catch (error) {
    return {
      success: false,
      message: "Internal several error to get all groups" + error.message,
    };
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
    return {
      success: false,
      message:
        "Internal server error to get group by Id N°" + groupId + error.message,
    };
  }
};

module.exports = { getAllGroups, getGroupById };
