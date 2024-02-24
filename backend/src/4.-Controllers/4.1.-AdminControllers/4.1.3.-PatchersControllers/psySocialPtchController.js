const { PsySocial } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -ADMIN-ROUTE-➡️ ", PsySocial);

const patchPsySocial = async (psyId, dataToUpdate) => {
  try {
    const collaborator = await PsySocial.findByPk(psyId);
    if (!collaborator) {
      return {
        success: false,
        message: `Psy social with id N° ${psyId} not found`,
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
    await PsySocial.update(
      { modificaciones },
      { where: { id: psyId } }
    );

    return {
      success: true,
      message: `PsicoSocial actualizado exitosamente ${psyId}`,
      modificaciones: modificaciones
    };
  } catch (error) {
    console.error("Error al actualizar el psicosocial: ");
    return {
      success: false,
      message:
        "Internal several error to update the psico social Id N° " +
        psyId +
        error.message,
    };
  }
};

module.exports = { patchPsySocial };