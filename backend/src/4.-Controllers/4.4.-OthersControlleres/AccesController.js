const { AdministrativeAssistant, Coordinator, HealthAndNutrition, InformationSystems, PsySocial, TeamIntervention } = require("../../3.-DataBase/dataBaseConfig");

const getAccesControl = async (email, password) => {
  try {
    const adminAssistant = await AdministrativeAssistant.findOne({ where: { email: email, password: password } });
    const coordinator = await Coordinator.findOne({ where: { email: email, password: password } });
    const healthNutrition = await HealthAndNutrition.findOne({ where: { email: email, password: password } });
    const infoSystem = await InformationSystems.findOne({ where: { email: email, password: password } });
    const psySocial = await PsySocial.findOne({ where: { email: email, password: password } });
    const teamIntervention = await TeamIntervention.findOne({ where: { email: email, password: password } });

    if (adminAssistant) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileAdministrative"
      };
    } else if (coordinator) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileCoordinator"
      };
    } else if (healthNutrition || psySocial || teamIntervention) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileTeachers"
      };
    } else if (infoSystem) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileCuentame"
      };
    } else {
      return {
        success: false,
        message: "El email o la contraseña son incorrectos."
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error interno: " + error.message
    };
  }
};



module.exports = {
  getAccesControl,
};
