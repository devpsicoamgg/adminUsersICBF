const { PsySocial } = require("../../../3.-DataBase/dataBaseConfig");

console.log("1️⃣.-Controller ⛔DELETE -ADMIN-ROUTE-➡️ ", PsySocial);

const deletePsyCollaborator = async (psyId) => {
  try {
    const psyCollaborator = await PsySocial.findByPk(
      psyId
    );
    if (!psyCollaborator) {
      throw new Error("Colaborador no encontrado");
    }

    await PsySocial.destroy({
      where: {
        id: psyId,
      },
    });

    return { message: "Colaborador exitosamente eliminado" };
  } catch (error) {
    throw new Error("Error al eliminar al colaborador: " + error.message);
  }
};

module.exports = { deletePsyCollaborator };
