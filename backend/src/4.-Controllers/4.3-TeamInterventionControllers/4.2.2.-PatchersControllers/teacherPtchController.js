const { TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -COORDI-ROUTE-➡️ ", TeamIntervention);

const patchCollaboratorByCoordi = async (teacherId, dataToUpdate) => {
  try {
    const teacher = await TeamIntervention.findByPk(teacherId);
    if (!teacher) {
      return {
        success: false,
        message: `Teacher with id N° ${teacherId} not found`,
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
      fechaModificacionesCoordinador: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesCoordinadorRealizadas: modifiedFields,
    };

    let modificaciones = teacher.modificaciones || [];
    modificaciones.push(modificationInfo);
    await TeamIntervention.update(
      { modificaciones },
      { where: { id: teacherId } }
    );

    return {
      success: true,
      message: `Colaborador actualizado exitosamente ${teacherId}`,
    };
  } catch (error) {
    console.error("Error al actualizar el colaborador: ");
    return {
      success: false,
      message:
        "Internal several error to update the teacher Id N° " +
        teacherId +
        error.message,
    };
  }
};

module.exports = { patchCollaboratorByCoordi };
