const {
  HealthAndNutrition,
  Group,
} = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -COORDI-ROUTE-➡️ ", HealthAndNutrition);

const patchNutritionistByCoordi = async (nutryId, dataToUpdate, groupId) => {
  try {
    const collaborator = await HealthAndNutrition.findByPk(nutryId);
    if (!collaborator) {
      return {
        success: false,
        message: `Nutricionista con id N° ${nutryId} no encontrado`,
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
          message: `El nutricionista ya está asociado al grupo con id N° ${groupId}`,
        };
      }

      await collaborator.addGroup(group);
      return {
        success: true,
        message: `Nutricionista asignado al grupo exitosamente`,
        datos: dataToUpdate,
      };
    }

    if (Object.keys(dataToUpdate).length === 0) {
      return {
        success: false,
        message: "No se proporcionaron datos para actualizar",
      };
    }

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

    await HealthAndNutrition.update(
      { modificaciones },
      { where: { id: nutryId } }
    );

    return {
      success: true,
      message: `Nutricionista actualizado exitosamente ${nutryId}`,
      modificaciones: modificaciones,
    };
  } catch (error) {
    console.error("Error al actualizar el nutricionista: ", error);
    return {
      success: false,
      message: `Error interno al actualizar el nutricionista con id N° ${nutryId}: ${error.message}`,
    };
  }
};

module.exports = { patchNutritionistByCoordi };
