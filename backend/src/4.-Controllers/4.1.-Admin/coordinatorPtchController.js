const { Coordinator } = require("../../3.-DataBase/dataBaseConfig");

console.log("Controller PATCH levantado en admin para", Coordinator);

const patchCoordinator = async (coordinatorId, dataToUpdate) => {
  try {
    const coordinator = await Coordinator.findByPk(coordinatorId);
    if (!coordinator) {
      return {
        success: false,
        message: `Contract with id N° ${coordinatorId} not found`,
      };
    }

    await coordinator.update(dataToUpdate, {
      where: {
        id: coordinatorId
      }
    });


    return { success: true, 
      message: `Cooordinador actualizado exitosamente ${coordinatorId}` };
  } catch (error) {
    console.error("Error al actualizar el cooordinador: " + error.message);
    return { success: false, message: "Internal several error"}
  }
};

module.exports = { patchCoordinator };
