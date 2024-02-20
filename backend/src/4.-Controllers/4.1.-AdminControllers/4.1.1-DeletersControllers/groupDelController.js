const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("1️⃣.-Controller ⛔DELETE -ADMIN-ROUTE - ➡️", Group);

const deleteGroup = async (groupId) => {
  try {
    const group = await Group.findByPk(groupId);
    if (!group) {
      throw new Error("Contrato no encontrado");
    }

    await group.destroy({
      where: {
        id: groupId,
      },
    });

    return { message: "Grupo eliminado exitosamente" };
  } catch (error) {
    throw new Error("Error al eliminar el grupo: " + error.message);
  }
};

module.exports = { deleteGroup };
