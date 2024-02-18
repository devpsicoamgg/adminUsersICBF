const { Group } = require("../../3.-DataBase/dataBaseConfig");

console.log("Controller PATCH levantado en admin para", Group);

const patchGroup = async (groupId, dataToUpdate) => {
  try {
    const group = await Group.findByPk(groupId);
    if (!group) {
      return {
        success: false,
        message: `Grupo with id N° ${groupId} not found`,
      };
    }

    await group.update(dataToUpdate);

    return { success: true, 
      message: `Grupo actualizado exitosamente ${groupId}` };
  } catch (error) {
    console.error("Error al actualizar el grupo: " + error.message);
    return { success: false, message: "Internal several error"}
  }
};

module.exports = { patchGroup };
