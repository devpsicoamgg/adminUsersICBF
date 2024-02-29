const { AdministrativeAssistant } = require("../../../3.-DataBase/dataBaseConfig");

console.log("3️⃣.-Controller 🛠️ PATCH -TEACHER-ROUTE-➡️ ", AdministrativeAssistant);

const patchAdministrativeAssistantBySelf = async (administrativeAssistantId, dataToUpdate) => {
  try {
    const collaborator = await AdministrativeAssistant.findByPk(administrativeAssistantId);
    if (!collaborator) {
      return {
        success: false,
        message: `Administrative Assistant with id N° ${administrativeAssistantId} not found`,
      };
    }

    const previousCollaboratorData = { ...collaborator.get() };
    await collaborator.update(dataToUpdate);
    const modifiedFields = {};
    for (const key of Object.keys(dataToUpdate)) {
      if (previousCollaboratorData[key] !== collaborator[key]) {
        modifiedFields[key] = {
          valor_anterior: previousCollaboratorData[key],
          valor_actual: previousCollaboratorData[key],
        };
      }
    }

    const numCamposModificados = Object.keys(modifiedFields).length;

    const modificationInfo = {
      fechaModificacionesAsistenteAdministrativo: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesAsistenteAdministrativoRealizadas: modifiedFields,
    };

    let modificaciones = collaborator.modificaciones || [];
    modificaciones.push(modificationInfo);
    await AdministrativeAssistant.update(
      { modificaciones },
      { where: { id: administrativeAssistantId } }
    );

    return {
      success: true,
      message: `Asistente administrativo actualizado exitosamente ${administrativeAssistantId}`,
      modificaciones: modificaciones,
    };
  } catch (error) {
    console.error("Error al actualizar el asistente administrativo: ");
    return {
      success: false,
      message:
        "Internal several error to update the administrative assistant Id N° " +
        administrativeAssistantId +
        error.message,
    };
  }
};

module.exports = { patchAdministrativeAssistantBySelf };
