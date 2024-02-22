const { TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig");

console.log(
  "2️⃣.-Controller 🚚GET -COORDI-ROUTE-➡️ ",
  TeamIntervention,
  "y teacherById"
);

const getAllMembersTeamIntervention = async (coordinatorId) => {
  try {
    const groups = await TeamIntervention.findAll({
      where: { coordinatorId: coordinatorId },
    });
    return {
      success: true,
      data: groups,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error interno del servidor" + error.message,
    };
  }
};

const getMemberTeamInterventionById = async (teacherId, coordinatorId) => {
  try {
    const teacher = await TeamIntervention.findByPk(teacherId);

    if (!teacher) {
      return {
        success: false,
        message: `Grupo con ID ${teacherId} no encontrado`,
      };
    }

    if (teacher.coordinatorId !== coordinatorId) {
      return {
        success: false,
        message: `El grupo con ID ${teacherId} no pertenece al coordinador con ID ${coordinatorId}`,
      };
    }

    return {
      success: true,
      data: teacher,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error interno del servidor: " + error.message,
    };
  }
};

module.exports = {
  getAllMembersTeamIntervention,
  getMemberTeamInterventionById,
};
