const { TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig");

console.log(
  "Controller 📥GET en ADMIN-ROUTE ➡️",
  TeamIntervention,
  "y teacherById"
);


const getAllMembersTeamIntervention = async () => {
  try {
    const teachers = await TeamIntervention.findAll();
    return {
      success: true,
      data: teachers,
    };
  } catch (error) {
    console.error(
      "Error al obtener los miembros del equipo de intervención: " +
        error.message
    );
    return { success: false, message: "Internal several error" };
  }
};

const getMemberTeamInterventionById = async (teacherId) => {
  try {
    const teacher = await TeamIntervention.findByPk(teacherId);

    if (!teacher) {
      return {
        success: false,
        message: `Miembro del equipo de intervención con ID ${teacherId} no encontrado`,
      };
    }

    return {
      success: true,
      data: teacher,
    };
  } catch (error) {
    console.error(
      "Error al obtener el miembro del equipo de intervencipon con ID: " +
        error.message
    );
    return { success: false, message: "Internal server error" };
  }
};

module.exports = {
  getAllMembersTeamIntervention,
  getMemberTeamInterventionById,
};
