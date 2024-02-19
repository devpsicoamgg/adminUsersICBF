const { Coordinator } = require("../../../3.-DataBase/dataBaseConfig");

console.log("Controller 📥GET en ADMIN-ROUTE ➡️", Coordinator, "y coordiById");

const getAllCoordinatorsByContractId = async (contractId) => {
  try {
    const coordinators = await Coordinator.findAll({
      where: { contractId: contractId },
      attributes: [
        'id',
        'firstName',
        'secondName',
        'firstLastName',
        'secondLastName',
        'nataleDate',
        'phone',
        'email'
      ]
    });
    return {
      success: true,
      data: coordinators,
    };
  } catch (error) {
    console.error("Error al obtener los coordinadores: " + error.message);
    return { success: false, message: "Internal several error" };
  }
};

module.exports = { getAllCoordinatorsByContractId };
