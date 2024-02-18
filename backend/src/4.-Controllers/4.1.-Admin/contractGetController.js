const { Contract } = require("../../3.-DataBase/dataBaseConfig");

console.log(
  "Controller 📥GET levantado en admin para",
  Contract,
  "y contractById"
);

const getAllContracts = async () => {
  try {
    const contracts = await Contract.findAll();
    return {
      success: true,
      data: contracts,
    };
  } catch (error) {
    console.error("Error al obtener los contratos: " + error.message);
    return { success: false, message: "Internal several error" };
  }
};

const getContractById = async (contractId) => {
  try {
    const contract = await Contract.findByPk(contractId);

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
    console.error("Error al obtener el contrato por ID: " + error.message);
    return { success: false, message: "Internal server error" };
  }
};

module.exports = { getAllContracts, getContractById };
