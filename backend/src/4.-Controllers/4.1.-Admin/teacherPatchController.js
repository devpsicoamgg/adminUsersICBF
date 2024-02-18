const { TeamIntervention } = require("../../3.-DataBase/dataBaseConfig");

console.log("Controller PATCH levantado en admin para", TeamIntervention);

const patchCollaborator = async (teacherId, dataToUpdate) => {
  try {
    const teacher = await TeamIntervention.findByPk(teacherId);
    if (!teacher) {
      return {
        success: false,
        message: `Teacher with id N° ${teacherId} not found`,
      };
    }

    await TeamIntervention.update(dataToUpdate, {
      where: {
        id: teacherId
      }
    });

    return { success: true, 
      message: `Colaborador actualizado exitosamente ${teacherId}` };
  } catch (error) {
    console.error("Error al actualizar el colaborador: " + error.message);
    return { success: false, message: "Internal several error"}
  }
};

module.exports = { patchCollaborator };
