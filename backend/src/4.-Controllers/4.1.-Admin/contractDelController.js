const { Contract } = require("../../3.-DataBase/dataBaseConfig");

console.log("Controller ⛔DELETE levantado en admin para", Contract);

const deleteContract = async (contractId) => {
  try {
    const contract = await Contract.findByPk(contractId);
    if (!contract) {
      throw new Error("Contrato no encontrado");
    }

    await contract.destroy({
      where: {
        id: contractId,
      },
    });

    return { message: "Contrato eliminado exitosamente" };
  } catch (error) {
    throw new Error("Error al eliminar el contrato: " + error.message);
  }
};

module.exports = { deleteContract };
