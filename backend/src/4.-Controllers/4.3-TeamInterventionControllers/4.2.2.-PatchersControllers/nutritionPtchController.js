const { HealthAndNutrition } = require("../../../3.-DataBase/dataBaseConfig");

console.log("3️⃣.-Controller 🛠️ PATCH -TEACHER-ROUTE-➡️ ", HealthAndNutrition);

const patchNutriBySelf = async (nutriId, dataToUpdate) => {
  try {
    console.log('Buscando colaborador por ID:', nutriId);
    const collaborator = await HealthAndNutrition.findByPk(nutriId);
    if (!collaborator) {
      return {
        success: false,
        message: `Teacher Nutrition with id N° ${nutriId} not found`,
      };
    }

    const previousCollaboratorData = { ...collaborator.get() };
    await collaborator.update(dataToUpdate);
    const modifiedFields = {};
    for (const key of Object.keys(dataToUpdate)) {
      if (previousCollaboratorData[key] !== collaborator[key]) {
        modifiedFields[key] = {
          valor_anterior: previousCollaboratorData[key],
          valor_actual: collaborator[key],
        };
      }
    }

    const numCamposModificados = Object.keys(modifiedFields).length;

    const modificationInfo = {
      fechaModificacionesNutricion: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesNutricionRealizadas: modifiedFields,
    };

    let modificaciones = collaborator.modificaciones || [];
    modificaciones.push(modificationInfo);
    await collaborator.update({ modificaciones });

    return {
      success: true,
      message: `Colaborador nutri actualizado exitosamente ${nutriId}`,
      modificaciones: modificaciones,
    };
  } catch (error) {
    console.error("Error al actualizar el colaborador: ", error);
    return {
      success: false,
      message:
        "Internal several error to update the teacher nutri Id N° " +
        nutriId +
        error.message,
    };
  }
};

module.exports = { patchNutriBySelf };