const { AdministrativeAssistant } = require("../../../3.-DataBase/dataBaseConfig");

console.log("1️⃣.-Controller ⛔DELETE -ADMIN-ROUTE-➡️ ", AdministrativeAssistant);

const deleteAdministrative = async (admiColaId) => {
  try {
    const administrative = await AdministrativeAssistant.findByPk(
      admiColaId
    );
    if (!administrative) {
      throw new Error("Colaborador no encontrado");
    }

    await AdministrativeAssistant.destroy({
      where: {
        id: admiColaId,
      },
    });

    return { message: "Colaborador exitosamente" };
  } catch (error) {
    throw new Error("Error al eliminar al colaborador: " + error.message);
  }
};

module.exports = { deleteAdministrative };
