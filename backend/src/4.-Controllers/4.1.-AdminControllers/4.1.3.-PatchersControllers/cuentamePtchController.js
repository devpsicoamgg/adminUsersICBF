const { InformationSystems } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -COORDI-ROUTE-➡️ ", InformationSystems);

const patchInformationSystems = async (cuentameId, dataToUpdate) => {
  try {
    const collaborator = await InformationSystems.findByPk(cuentameId);
    if (!collaborator) {
      return {
        success: false,
        message: `Cuéntame with id N° ${cuentameId} not found`,
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
    await InformationSystems.update(
      { modificaciones },
      { where: { id: cuentameId } }
    );

    return {
      success: true,
      message: `Colaborador cuéntame actualizado exitosamente ${cuentameId}`,
      modificaciones: modificaciones
    };
  } catch (error) {
    console.error("Error al actualizar el colaborador: ");
    return {
      success: false,
      message:
        "Internal several error to update the collaborator Id N° " +
        cuentameId +
        error.message,
    };
  }
};

module.exports = { patchInformationSystems };