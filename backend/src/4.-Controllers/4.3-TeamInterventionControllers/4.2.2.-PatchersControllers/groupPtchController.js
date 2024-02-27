const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -COORDI-ROUTE-➡️ ", Group);

const patchGroupByTeacher = async (groupId, dataToUpdate) => {
  try {
    const group = await Group.findByPk(groupId);
    if (!group) {
      return {
        success: false,
        message: `Group with id N° ${groupId} not found`,
      };
    }

    const allowedProperties = ["address", "neighborhood"];
    const filteredDataToUpdate = {};
    for (const key in dataToUpdate) {
      if (allowedProperties.includes(key)) {
        filteredDataToUpdate[key] = dataToUpdate[key];
      } else {
        throw new Error(`El perfil del docente no permite modificar el campo '${key}'`);
      }
    }

    const previousGroupData = { ...group.get() };
    await group.update(filteredDataToUpdate);

    const modifiedFields = {};
    for (const key of Object.keys(filteredDataToUpdate)) {
      if (previousGroupData[key] !== group[key]) {
        modifiedFields[key] = {
          valor_anterior: previousGroupData[key],
          valor_actual: group[key],
        };
      }
    }

    const numCamposModificados = Object.keys(modifiedFields).length;

    const modificationInfo = {
      fechaModificacionesDocentes: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesDocentesRealizadas: modifiedFields,
    };

    let modificaciones = group.modificaciones || [];
    modificaciones.push(modificationInfo);

    await Group.update({ modificaciones }, { where: { id: groupId } });

    return {
      success: true,
      message: `Group actualizado exitosamente ${groupId}`,
      modificaciones: modificaciones,
    };
  } catch (error) {
    return {
      success: false,
      message:
        "Internal several error to update the group N°" +
        groupId +
        error.message,
    };
  }
};

module.exports = { patchGroupByTeacher };
