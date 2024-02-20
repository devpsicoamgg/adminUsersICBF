const { Group } = require("../../../3.-DataBase/dataBaseConfig");
console.log("Controller ⛔DELETE en 2️⃣  - COORDI-ROUTE -➡️", Group);
console.log("______________________________________________________________pollo")

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
