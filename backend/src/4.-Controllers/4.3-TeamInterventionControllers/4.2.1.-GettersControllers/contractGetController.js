const {
  Contract,
  Coordinator,
} = require("../../../3.-DataBase/dataBaseConfig");

console.log("RUTAS EN TEACHERS_______________________________");
console.log("3️⃣.-Controller 🚚GET -TEACHERS-ROUTE-➡️ ", Contract, Coordinator);

const checkCoordinatorContractAccess = async (coordinatorId, contractId) => {
  console.log("elId del coordi", coordinatorId);
  console.log("elId del contrato", contractId);
  try {
    const coordinator = await Coordinator.findByPk(coordinatorId, {
      include: [{ model: Contract, where: { id: contractId } }],
    });

    return coordinator ? true : false;
  } catch (error) {
    console.error(
      "Error al verificar el acceso del coordinador al contrato:",
      error.message
    );
    return false;
  }
};

const getContractById = async (contractId, coordinatorId) => {
  try {
    const hasAccess = await checkCoordinatorContractAccess(
      coordinatorId,
      contractId
    );

    if (!hasAccess) {
      return {
        success: false,
        message: "El docente no tiene permiso para acceder al contrato",
      };
    }

    const contract = await Contract.findByPk(contractId, {
      attributes: { exclude: ["modificaciones", "updatedAt", "createdAt"] },
    });

    if (!contract) {
      return {
        success: false,
        message: `Contrato con ID ${contractId} no encontrado`,
      };
    }

    return {
      success: true,
      data: contract,
    };
  } catch (error) {
    console.error("Error al obtener el contrato por ID: ");
    return {
      success: false,
      message:
        "Internal server error" + error.message + coordinatorId + contractId,
    };
  }
};

module.exports = { getContractById };
