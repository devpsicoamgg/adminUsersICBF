const { TeamIntervention } = require("../../3.-DataBase/dataBaseConfig");

console.log("Controller DELETE levantado en admin para", TeamIntervention)

const deleteCollaborator = async (teamInterventionId) => {
  try {
    const teamIntervention = await TeamIntervention.findByPk(teamInterventionId);
    if (!teamIntervention ) {
      throw new Error("Colaborador no encontrado");
    }


    await TeamIntervention.destroy({
      where: {
        id: teamInterventionId
      }
    });
    
    return { message: "Colaborador exitosamente" };
  } catch (error) {
    throw new Error("Error al eliminar al colaborador: " + error.message);
  }
};

module.exports = { deleteCollaborator };