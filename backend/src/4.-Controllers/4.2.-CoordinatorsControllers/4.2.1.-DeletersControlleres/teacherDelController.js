const { TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig");

console.log(
  "RUTAS EN COORDI___________________________________________________"
);

console.log("2️⃣.-Controller ⛔DELETE -COORDI-ROUTE-➡️ ", TeamIntervention);

const deleteCollaborator = async (teamInterventionId, coordinatorId) => {
  try {
    const teamIntervention = await TeamIntervention.findByPk(
      teamInterventionId
    );
    if (!teamIntervention) {
      throw new Error("Grupo de intervención no encontrado");
    }
    if (teamIntervention.coordinatorId !== coordinatorId) {
      throw new Error(
        "El coordinador no tiene permisos suficientes para eliminar el colaborador"
      );
    }

    await TeamIntervention.destroy({
      where: {
        id: teamInterventionId,
      },
    });

    return { message: "Colaborador eliminado exitosamente" };
  } catch (error) {
    throw new Error("Error al eliminar al colaborador: " + error.message);
  }
};

module.exports = { deleteCollaborator };
