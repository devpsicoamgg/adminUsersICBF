const { PsySocial, Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -COORDI-ROUTE-➡️ ", PsySocial);

const patchPsySocialByCoordi = async (psyId, dataToUpdate, groupId) => {
  try {
    const collaborator = await PsySocial.findByPk(psyId);
    if (!collaborator) {
      return {
        success: false,
        message: `Psy social con id N° ${psyId} no encontrado`,
      };
    }

    const previousTeacherData = { ...collaborator.get() };
    const modificaciones = [];


    if (groupId) {
      const group = await Group.findByPk(groupId);
      if (!group) {
        return {
          success: false,
          message: `Grupo con id N° ${groupId} no encontrado`,
        };
      }


      const isAssociated = await collaborator.hasGroup(group);
      if (isAssociated) {
        return {
          success: false,
          message: `El psy social ya está asociado al grupo con id N° ${groupId}`,
        };
      }


      await collaborator.addGroup(group);
      
      return {
        success: true,
        message: `Psy social asignado al grupo exitosamente`,
      };
    }

    // Si no se proporcionó groupId, proceder con la actualización de datos
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

    modificaciones.push(modificationInfo);

    await PsySocial.update(
      { modificaciones },
      { where: { id: psyId } }
    );

    return {
      success: true,
      message: `Psy social actualizado exitosamente ${psyId}`,
      modificaciones: modificaciones,
    };
  } catch (error) {
    console.error("Error al actualizar el psicosocial: ", error);
    return {
      success: false,
      message: `Error interno al actualizar el psy social con id N° ${psyId}: ${error.message}`,
    };
  }
};

module.exports = { patchPsySocialByCoordi };
