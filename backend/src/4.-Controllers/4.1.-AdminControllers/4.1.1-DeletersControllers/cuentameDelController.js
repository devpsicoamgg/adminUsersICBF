const { InformationSystems } = require("../../../3.-DataBase/dataBaseConfig");

console.log("1️⃣.-Controller ⛔DELETE -ADMIN-ROUTE-➡️ ", InformationSystems);

const deleteCuentameCollaborator = async (cuentameId) => {
  try {
    const cuentameCollaborator = await InformationSystems.findByPk(
      cuentameId
    );
    if (!cuentameCollaborator) {
      throw new Error("Colaborador no encontrado");
    }

    await InformationSystems.destroy({
      where: {
        id: cuentameId,
      },
    });

    return { message: "Colaborador exitosamente eliminado" };
  } catch (error) {
    throw new Error("Error al eliminar al colaborador: " + error.message);
  }
};

module.exports = { deleteCuentameCollaborator };
