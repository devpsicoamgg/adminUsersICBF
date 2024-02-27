const {
  Group,
  UserFinal,
  Family,
} = require("../../../3.-DataBase/dataBaseConfig");

console.log("3️⃣.-Controller 🚚GET -TEACHERS-ROUTE-➡️ " + "y teacherById");

const getAllUsersByGroup = async (groupId) => {
  try {
    const usersWithFamily = await UserFinal.findAll({
      where: { groupId: groupId },
      include: [Family],
    });

    console.log("Usuarios con sus miembros de la familia:", usersWithFamily);

    return {
      status: 200,
      data:  usersWithFamily,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Error interno del servidor" + error.message,
    };
  }
};


const getUserById = async (userId, teacherId) => {
  try {
    const user = await UserFinal.findOne({
      where: { id: userId, teacherId: teacherId },
      include: [Family] 
    });

    if (!user) {
      return {
        status: 404,
        message: `El usuario con ID ${userId} no está asociado al teacherId ${teacherId}`,
      };
    }

    return {
      status: 200,
      data: user,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Error interno del servidor" + error.message,
    };
  }
};

module.exports = {
  getAllUsersByGroup,
  getUserById
};
