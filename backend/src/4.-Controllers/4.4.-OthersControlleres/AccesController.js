const {
  AdministrativeAssistant,
  Coordinator,
  HealthAndNutrition,
  InformationSystems,
  PsySocial,
  TeamIntervention,
  SuperAdmin,
} = require("../../3.-DataBase/dataBaseConfig");



const getAccesControl = async (email, password) => {
  try {
    const adminAssistant = await AdministrativeAssistant.findOne({
      where: { email: email, password: password },
    });
    const superAdmin = await SuperAdmin.findOne({
      where: { email: email, password: password },
    });
    const coordinator = await Coordinator.findOne({
      where: { email: email, password: password },
    });
    const healthNutrition = await HealthAndNutrition.findOne({
      where: { email: email, password: password },
    });
    const infoSystem = await InformationSystems.findOne({
      where: { email: email, password: password },
    });
    const psySocial = await PsySocial.findOne({
      where: { email: email, password: password },
    });
    const teamIntervention = await TeamIntervention.findOne({
      where: { email: email, password: password },
    });

    if (adminAssistant) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileAdministrative",
      };
    } else if (superAdmin) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileSuperAdmin",
      };
    } else if (coordinator) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileCoordinator",
      };
    } else if (psySocial) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileTeachers",
      };
    } else if (healthNutrition) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileHealthNutrition",
      };
    } else if (teamIntervention) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileTeamIntervention",
      };
    } else if (infoSystem) {
      return {
        success: true,
        message: "El email y la contraseña son válidos.",
        profile: "profileCuentame",
      };
    } else {
      return {
        success: false,
        message: "El email o la contraseña son incorrectos.",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error interno: " + error.message,
    };
  }
};

module.exports = {
  getAccesControl,
};
