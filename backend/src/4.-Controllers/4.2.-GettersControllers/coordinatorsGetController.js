const { Coordinator } = require("../../3.-DataBase/dataBaseConfig");

console.log(
  "Controller 📥GET levantado para acciones en",
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
    console.error("Error al obtener los coordinadores: " + error.message);
    return { success: false, message: "Internal several error" };
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
    console.error("Error al obtener el coordinador con ID: " + error.message);
    return { success: false, message: "Internal server error" };
  }
};

module.exports = { getAllCoordinators, getCoordinatorById };
