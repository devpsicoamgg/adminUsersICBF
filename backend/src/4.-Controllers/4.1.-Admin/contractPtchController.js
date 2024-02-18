const { Contract } = require("../../3.-DataBase/dataBaseConfig");

console.log("Controller PATCH levantado en admin para", Contract);

const patchContract = async (contractId, dataToUpdate) => {
  try {
    const contract = await Contract.findByPk(contractId);
    if (!contract) {
      return {
        success: false,
        message: `Contract with id N° ${contractId} not found`,
      };
    }

    await contract.update(dataToUpdate);

    return { success: true, 
      message: `Contrato actualizado exitosamente ${contractId}` };
  } catch (error) {
    console.error("Error al actualizar el contrato: " + error.message);
    return { success: false, message: "Internal several error"}
  }
};

module.exports = { patchContract };
