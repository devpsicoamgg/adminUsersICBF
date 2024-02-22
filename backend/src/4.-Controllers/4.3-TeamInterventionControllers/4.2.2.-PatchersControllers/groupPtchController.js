const { Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -COORDI-ROUTE-➡️ ", Group);

const patchGroupByCoordi = async (groupId, dataToUpdate) => {
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
      fechaModificacionesCoordinador: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesCoordinadorRealizadas: modifiedFields,
    };

    let modificaciones = group.modificaciones || [];
    modificaciones.push(modificationInfo);

    await Group.update({ modificaciones }, { where: { id: groupId } });

    return {
      success: true,
      message: `Group actualizado exitosamente ${groupId}`,
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

module.exports = { patchGroupByCoordi };
