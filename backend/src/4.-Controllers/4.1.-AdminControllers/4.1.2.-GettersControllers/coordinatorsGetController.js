const { Coordinator } = require("../../../3.-DataBase/dataBaseConfig");

console.log(
  "1️⃣.-Controller 📥GET -ADMIN-ROUTE - ➡️",
  Coordinator,
  "y coordiById"
);

const getAllCoordinators = async () => {
  try {
    const coordinators = await Coordinator.findAll();
    return {
      success: true,
      data: coordinators,
    };
  } catch (error) {
    return {
      success: false,
      message: "Internal several error to get all coordinators" + error.message,
    };
  }
};

const getCoordinatorById = async (coordinatorId) => {
  try {
    const coordinator = await Coordinator.findByPk(coordinatorId);

    if (!coordinator) {
      return {
        success: false,
        message: `Contrato con ID ${coordinatorId} no encontrado`,
      };
    }

    return {
      success: true,
      data: coordinator,
    };
  } catch (error) {
    return {
      success: false,
      message:
        "Internal server error to get coordinator by Id N°" +
        coordinatorId +
        error.message,
    };
  }
};

module.exports = { getAllCoordinators, getCoordinatorById };
