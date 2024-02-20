const { Coordinator } = require("../../../3.-DataBase/dataBaseConfig");

console.log("1️⃣.-Controller 🛠️ PATCH -ADMIN-ROUTE - ➡️", Coordinator);

const patchCoordinator = async (coordinatorId, dataToUpdate) => {
  try {
    const coordinator = await Coordinator.findByPk(coordinatorId);
    if (!coordinator) {
      return {
        success: false,
        message: `Coordinator with id N° ${coordinatorId} not found`,
      };
    }

    const previousCoordinatorData = { ...coordinator.get() };

    await coordinator.update(dataToUpdate);

    const modifiedFields = {};
    for (const key of Object.keys(dataToUpdate)) {
      if (previousCoordinatorData[key] !== coordinator[key]) {
        modifiedFields[key] = {
          valor_anterior: previousCoordinatorData[key],
          valor_actual: coordinator[key],
        };
      }
    }

    const numCamposModificados = Object.keys(modifiedFields).length;

    const modificationInfo = {
      FechaModificaciónAdministrativa: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesAdministrativasRealizadas: modifiedFields,
    };

    let modificaciones = coordinator.modificaciones || [];
    modificaciones.push(modificationInfo);

    await Coordinator.update(
      { modificaciones },
      { where: { id: coordinatorId } }
    );

    return {
      success: true,
      message: `Coordinator actualizado exitosamente ${coordinatorId}`,
    };
  } catch (error) {
    console.error("Error al actualizar el coordinador: ");
    return {
      success: false,
      message:
        "Internal several error to update the  coordinator N° " +
        coordinatorId +
        error.message,
    };
  }
};

module.exports = { patchCoordinator };
