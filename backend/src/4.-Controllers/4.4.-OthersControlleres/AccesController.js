const { AdministrativeAssistant, Coordinator, HealthAndNutrition, InformationSystems, PsySocial } = require("../../3.-DataBase/dataBaseConfig");

const getAccesControl = async (email) => {
  try {
    // Realiza la consulta para verificar si el email existe en las tablas correspondientes
    const adminAssistant = await AdministrativeAssistant.findOne({ where: { email: email } });
    const coordinator = await Coordinator.findOne({ where: { email: email } });
    const healthNutrition = await HealthAndNutrition.findOne({ where: { email: email } });
    const infoSystem = await InformationSystems.findOne({ where: { email: email } });
    const psySocial = await PsySocial.findOne({ where: { email: email } });

    // Verifica de qué tabla proviene el email y si el acceso está permitido
    if (adminAssistant) {
      return {
        success: true,
        message: "El email existe y tiene acceso permitido.",
        table: "AdministrativeAssistant",
      };
    } else if (coordinator) {
      return {
        success: true,
        message: "El email existe y tiene acceso permitido.",
        table: "Coordinator",
      };
    } else if (healthNutrition) {
      return {
        success: true,
        message: "El email existe y tiene acceso permitido.",
        table: "HealthAndNutrition",
      };
    } else if (infoSystem) {
      return {
        success: true,
        message: "El email existe y tiene acceso permitido.",
        table: "InformationSystems",
      };
    } else if (psySocial) {
      return {
        success: true,
        message: "El email existe y tiene acceso permitido.",
        table: "PsySocial",
      };
    } else {
      return {
        success: false,
        message: "El email no existe o no tiene acceso permitido.",
        table: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error interno: " + error.message,
      table: null,
    };
  }
};

module.exports = {
  getAccesControl,
};
