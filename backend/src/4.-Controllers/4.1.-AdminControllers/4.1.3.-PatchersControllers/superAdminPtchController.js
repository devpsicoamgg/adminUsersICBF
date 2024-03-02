const { SuperAdmin } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -ADMIN-ROUTE-➡️ ", SuperAdmin);

const patchSuperAdmin = async (patchSuperAdminId, dataToUpdate) => {
  try {
    const collaborator = await SuperAdmin.findByPk(patchSuperAdminId);
    if (!collaborator) {
      return {
        success: false,
        message: `Super Admin with id N° ${patchSuperAdminId} not found`,
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
      fechaModificacionesSuperAdmin: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesSuperAdminRealizadas: modifiedFields,
    };

    let modificaciones = collaborator.modificaciones || [];
    modificaciones.push(modificationInfo);
    await SuperAdmin.update(
      { modificaciones },
      { where: { id: patchSuperAdminId } }
    );

    return {
      success: true,
      message: `Super Admin actualizado exitosamente ${patchSuperAdminId}`,
      modificaciones: modificaciones
    };
  } catch (error) {
    console.error("Error al actualizar el super admin: ");
    return {
      success: false,
      message:
        "Internal several error to update the super admin Id N° " +
        patchSuperAdminId +
        error.message,
    };
  }
};

module.exports = { patchSuperAdmin };
