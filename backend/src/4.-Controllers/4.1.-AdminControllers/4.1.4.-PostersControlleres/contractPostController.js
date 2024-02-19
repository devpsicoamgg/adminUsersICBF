const { Contract } = require("../../../3.-DataBase/dataBaseConfig");

console.log("Controller 📤POST en ADMIN-ROUTE ➡️", Contract);

const createContractInformation = async (
  areaMisionalIcbf,
  regional,
  vigencia,
  serviceName,
  supervisor,
  startDate,
  endDate,
  contractNumber,
  legalRepresentative,
  spots
) => {
  return await Contract.create({
    areaMisionalIcbf,
    regional,
    vigencia,
    serviceName,
    supervisor,
    startDate,
    endDate,
    contractNumber,
    legalRepresentative,
    spots,
  });
};

module.exports = { createContractInformation };
