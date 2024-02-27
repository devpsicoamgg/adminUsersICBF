const { UserFinal } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 🛠️ PATCH -COORDI-ROUTE-➡️ ", UserFinal);

const patchUserByTeacher = async (userId, dataToUpdate) => {
  try {
    const user = await UserFinal.findByPk(userId);
    if (!user) {
      return {
        success: false,
        message: `User with id N° ${userId} not found`,
      };
    }

    const previousUserData = { ...user.get() };
    await user.update(dataToUpdate);

    const modifiedFields = {};
    for (const key of Object.keys(dataToUpdate)) {
      if (previousUserData[key] !== user[key]) {
        modifiedFields[key] = {
          valor_anterior: previousUserData[key],
          valor_actual: user[key],
        };
      }
    }

    const numCamposModificados = Object.keys(modifiedFields).length;

    const modificationInfo = {
      fechaModificacionesAUsuarioPorDocente: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesAUsuarioRealizadasPorDocentes: modifiedFields,
    };

    let modificaciones = user.modificaciones || [];
    modificaciones.push(modificationInfo);

    await UserFinal.update({ modificaciones }, { where: { id: userId } });

    return {
      success: true,
      message: `User actualizado exitosamente ${userId}`,
      modificaciones: modificaciones,
    };
  } catch (error) {
    return {
      success: false,
      message: "Internal several error to update the user N°" + userId + error.message,
    };
  }
};

module.exports = { patchUserByTeacher };
