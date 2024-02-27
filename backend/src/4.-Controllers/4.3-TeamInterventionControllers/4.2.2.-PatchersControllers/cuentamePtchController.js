const { InformationSystems } = require("../../../3.-DataBase/dataBaseConfig");

console.log("3️⃣.-Controller 🛠️ PATCH -TEACHER-ROUTE-➡️ ", InformationSystems);

const patchInformationSystemsBySelf = async (teacherId, dataToUpdate) => {
  try {
    const collaborator = await InformationSystems.findByPk(teacherId);
    if (!collaborator) {
      return {
        success: false,
        message: `Teacher Cuentame with id N° ${teacherId} not found`,
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
      fechaModificacionesCuentame: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesCuentameRealizadas: modifiedFields,
    };

    let modificaciones = collaborator.modificaciones || [];
    modificaciones.push(modificationInfo);
    await collaborator.update({ modificaciones });

    return {
      success: true,
      message: `Colaborador cuentame actualizado exitosamente ${teacherId}`,
      modificaciones: modificaciones,
    };
  } catch (error) {
    console.error("Error al actualizar el colaborador: ", error);
    return {
      success: false,
      message:
        "Internal several error to update the teacher Id N° " +
        teacherId +
        " " +
        error.message,
    };
  }
};

module.exports = { patchInformationSystemsBySelf };
