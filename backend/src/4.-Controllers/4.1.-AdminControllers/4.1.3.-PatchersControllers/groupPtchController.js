const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("1️⃣.-Controller 🛠️ PATCH -ADMIN-ROUTE-➡️ ", Group);

const patchGroup = async (groupId, dataToUpdate) => {
  try {
    const group = await Group.findByPk(groupId);
    if (!group) {
      return {
        success: false,
        message: `Group with id N° ${groupId} not found`,
      };
    }

    const previousGroupData = { ...group.get() };
    await group.update(dataToUpdate);

    const modifiedFields = {};
    for (const key of Object.keys(dataToUpdate)) {
      if (previousGroupData[key] !== group[key]) {
        modifiedFields[key] = {
          valor_anterior: previousGroupData[key],
          valor_actual: group[key],
        };
      }
    }

    const numCamposModificados = Object.keys(modifiedFields).length;

    const modificationInfo = {
      FechaModificaciónAdministrativa: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesAdministrativasRealizadas: modifiedFields,
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

module.exports = { patchGroup };
