const { Coordinator, Contract, Group } = require("../../../3.-DataBase/dataBaseConfig");

console.log("2️⃣.-Controller 📥GET -TEACHERS-ROUTE - ➡️", Coordinator, Contract, Group);

const getAllCoordinatorsByContractId = async (contractId) => {
  try {
    const contract = await Contract.findByPk(contractId);
    if (!contract) {
      return { success: false, message: "El contrato no existe" };
    }

    // Obtener todos los coordinadores asociados al contrato
    const coordinators = await Coordinator.findAll({
      where: { contractId: contractId },
      attributes: [
        "id",
        "firstName",
        "secondName",
        "firstLastName",
        "secondLastName",
        "nataleDate",
        "phone",
        "email",
      ],
    });

    // Para cada coordinador, obtener los grupos asociados
    for (const coordinator of coordinators) {
      const groups = await Group.findAll({
        where: { coordinatorId: coordinator.id },
        attributes: [
          "id",
          "groupName",
          "address",
          "municipality",
          "neighborhood",
          "isActive"
        ],
      });
      coordinator.dataValues.groups = groups || []; 
    }

    return {
      success: true,
      data: coordinators,
    };
  } catch (error) {
    console.error("Error al obtener los coordinadores: ", error);
    return {
      success: false,
      message: "Error interno del servidor: " + error.message + contractId,
    };
  }
};

module.exports = { getAllCoordinatorsByContractId };
