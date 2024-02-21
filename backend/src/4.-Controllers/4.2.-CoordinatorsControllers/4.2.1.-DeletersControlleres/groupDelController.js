const { Group } = require("../../../3.-DataBase/dataBaseConfig");
console.log("2️⃣.-Controller ⛔DELETE -COORDI-ROUTE -➡️", Group);

const deleteGroup = async (groupId, coordinatorId) => {
  try {
    const group = await Group.findByPk(groupId);
    if (!group) {
      throw new Error("Grupo no encontrado");
    }

    if (group.coordinatorId !== coordinatorId) {
      throw new Error("El coordinador no tiene permisos suficientes para eliminar el grupo");
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
