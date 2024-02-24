const { HealthAndNutrition } = require("../../../3.-DataBase/dataBaseConfig");

console.log("1️⃣.-Controller ⛔DELETE -ADMIN-ROUTE-➡️ ", HealthAndNutrition);

const deleteNutriCollaborator = async (nutriId) => {
  try {
    const nutriCollaborator = await HealthAndNutrition.findByPk(
      nutriId
    );
    if (!nutriCollaborator) {
      throw new Error("Colaborador no encontrado");
    }

    await HealthAndNutrition.destroy({
      where: {
        id: nutriId,
      },
    });

    return { message: "Colaborador exitosamente eliminado" };
  } catch (error) {
    throw new Error("Error al eliminar al colaborador: " + error.message);
  }
};

module.exports = { deleteNutriCollaborator };
