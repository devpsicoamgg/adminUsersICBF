const { TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig");

console.log(
  "Controller 📥GET en ADMIN-ROUTE ➡️",
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
    console.error("Error al obtener los grupos: " + error.message);
    return { success: false, message: "Error interno del servidor" };
  }
}; 

const getMemberTeamInterventionById = async (groupId, coordinatorId) => {
  try {
    const group = await Group.findByPk(groupId, {
      where: { coordinatorId: coordinatorId }
    });
    
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


module.exports = {
  getAllMembersTeamIntervention,
  getMemberTeamInterventionById,
};
