const { Contract } = require("../../../3.-DataBase/dataBaseConfig");

console.log("1️⃣.-Controller 🛠️ PATCH -ADMIN-ROUTE - ➡️", Contract);

const patchContract = async (contractId, dataToUpdate) => {
  try {
    const contract = await Contract.findByPk(contractId);
    if (!contract) {
      return {
        success: false,
        message: `Contract with id N° ${contractId} not found`,
      };
    }

    const previousContractData = { ...contract.get() };
    await contract.update(dataToUpdate);
    const modifiedFields = {};
    for (const key of Object.keys(dataToUpdate)) {
      if (previousContractData[key] !== contract[key]) {
        modifiedFields[key] = {
          valor_anterior: previousContractData[key],
          valor_actual: contract[key],
        };
      }
    }

    const numCamposModificados = Object.keys(modifiedFields).length;

    const modificationInfo = {
      FechaModificaciónAdministrativa: new Date(),
      numCamposModificados: numCamposModificados,
      modificacionesAdministrativasRealizadas: modifiedFields,
    };

    let modificaciones = contract.modificaciones || [];
    modificaciones.push(modificationInfo);
    await Contract.update({ modificaciones }, { where: { id: contractId } });

    return {
      success: true,
      message: `Contrato actualizado exitosamente ${contractId}`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Internal several error to update de contract" + error.message,
    };
  }
};

module.exports = { patchContract };
