const { Coordinator } = require("../../3.-DataBase/dataBaseConfig");

console.log("Controller ⛔DELETE levantado para acciones en", Coordinator);

const deleteCoordinator = async (coordinatorId) => {
  try {
    const coordinator = await Coordinator.findByPk(coordinatorId);
    if (!coordinator) {
      throw new Error("Coordinador  no encontrado");
    }

    await Coordinator.destroy({
      where: {
        id: coordinatorId,
      },
    });

    return { message: "Coordinador exitosamente eliminad" };
  } catch (error) {
    throw new Error("Error al eliminar al coordinador: " + error.message);
  }
};

module.exports = { deleteCoordinator };
