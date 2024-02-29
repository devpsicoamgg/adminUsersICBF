const { PsySocial } = require("../../../3.-DataBase/dataBaseConfig");

console.log("3️⃣.-Controller 🛠️ PATCH -TEACHER-ROUTE-➡️ ", PsySocial);

const patchPsySocialBySelf = async (psySocialId, dataToUpdate) => {
  try {
    const teacher = await PsySocial.findByPk(psySocialId);
    if (!teacher) {
      return {
        success: false,
        message: `PsySocial with id N° ${psySocialId} not found`,
      };
    }

    const previousTeacherData = { ...teacher.get() };
    await teacher.update(dataToUpdate);
    const modifiedFields = {};
    for (const key of Object.keys(dataToUpdate)) {
      if (previousTeacherData[key] !== teacher[key]) {
        modifiedFields[key] = {
          valor_anterior: previousTeacherData[key],
          valor_actual: teacher[key],
        };
      }
    }

    const numCamposModificados = Object.keys(modifiedFields).length;

    const modificationInfo = {
      fechaModificacionesPsySocial: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesPsySocialIdRealizadas: modifiedFields,
    };

    let modificaciones = teacher.modificaciones || [];
    modificaciones.push(modificationInfo);
    await PsySocial.update(
      { modificaciones },
      { where: { id: psySocialId } }
    );

    return {
      success: true,
      message: `PsySocial actualizado exitosamente ${psySocialId}`,
      modificaciones: modificaciones
    };
  } catch (error) {
    console.error("Error al actualizar el colaborador: ");
    return {
      success: false,
      message:
        "Internal several error to update the teacher Id N° " +
        psySocialId +
        error.message,
    };
  }
};

module.exports = { patchPsySocialBySelf };
