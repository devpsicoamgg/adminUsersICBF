const { Contract } = require("../../../3.-DataBase/dataBaseConfig");

console.log(
  "Controller 📥GET en 1️⃣  - ADMIN-ROUTE - ➡️",
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
    return {
      success: false,
      message: "Internal several error to get contract" + error.message,
    };
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
    return {
      success: false,
      message:
        "Internal server error to get contract by Id" +
        contractId +
        error.message,
    };
  }
};

module.exports = { getAllContracts, getContractById };
