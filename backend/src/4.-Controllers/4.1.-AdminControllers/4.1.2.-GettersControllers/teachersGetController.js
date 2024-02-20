const { TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig");

console.log(
  "1️⃣.-Controller 📥GET -ADMIN-ROUTE - ➡️",
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
    return {
      success: false,
      message: "Internal several error" + error.message,
    };
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
    return {
      success: false,
      message:
        "Internal server error to get teacher by Id N° " +
        teacherId +
        error.message,
    };
  }
};

module.exports = {
  getAllMembersTeamIntervention,
  getMemberTeamInterventionById,
};
