const { HealthAndNutrition } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -ADMIN-ROUTE-➡️ ", HealthAndNutrition);

const patchNutritionist = async (nutryId, dataToUpdate) => {
  try {
    const collaborator = await HealthAndNutrition.findByPk(nutryId);
    if (!collaborator) {
      return {
        success: false,
        message: `Psy social with id N° ${nutryId} not found`,
      };
    }

    const previousTeacherData = { ...collaborator.get() };
    await collaborator.update(dataToUpdate);
    const modifiedFields = {};
    for (const key of Object.keys(dataToUpdate)) {
      if (previousTeacherData[key] !== collaborator[key]) {
        modifiedFields[key] = {
          valor_anterior: previousTeacherData[key],
          valor_actual: collaborator[key],
        };
      }
    }

    const numCamposModificados = Object.keys(modifiedFields).length;

    const modificationInfo = {
      fechaModificacionesAdmin: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesAdminRealizadas: modifiedFields,
    };

    let modificaciones = collaborator.modificaciones || [];
    modificaciones.push(modificationInfo);
    await HealthAndNutrition.update(
      { modificaciones },
      { where: { id: nutryId } }
    );

    return {
      success: true,
      message: `Nutricionista actualizado exitosamente ${nutryId}`,
      modificaciones: modificaciones
    };
  } catch (error) {
    console.error("Error al actualizar el nutricionista: ");
    return {
      success: false,
      message:
        "Internal several error to update the nutri Id N° " +
        nutryId +
        error.message,
    };
  }
};

module.exports = { patchNutritionist };