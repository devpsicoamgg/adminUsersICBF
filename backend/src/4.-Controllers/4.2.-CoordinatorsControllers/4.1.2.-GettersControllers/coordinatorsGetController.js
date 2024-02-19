const { Coordinator, Contract } = require("../../../3.-DataBase/dataBaseConfig");

console.log("Controller 📥GET en ADMIN-ROUTE ➡️", Coordinator, Contract);

const getAllCoordinatorsByContractId = async (contractId) => {
  try {

    const contract = await Contract.findByPk(contractId);
    if (!contract) {
      return { success: false, message: "El contrato no existe" };
    }

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
    return { success: false, message: "Error interno del servidor" };
  }
};


module.exports = { getAllCoordinatorsByContractId };
