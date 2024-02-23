const { Contract, Coordinator } = require("../../3.-DataBase/dataBaseConfig");
const {
  createContractInformation,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.4.-PostersControlleres/contractPostController");
const {
  createCoordinator,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.4.-PostersControlleres/coordinatorPostController");
const {
  createTeamIntervention,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.4.-PostersControlleres/teacherPostController");
const {
  createGroup,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.4.-PostersControlleres/groupPostController");

const createContractHandler = async (req, res) => {
  const {
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
  } = req.body;

  try {
    const response = await createContractInformation(
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
    );

    res
      .status(200)
      .send(response);
  } catch (error) {
    console.error("Error al crear el contrato:", error);
    res.status(400).json({ error: error.message });
  }
};

const createCoordinatorHandler = async (req, res) => {
  const contractId = req.body.contractId;
  const {
    firstName,
    secondName,
    firstLastName,
    secondLastName,
    kindDoc,
    numberDoc,
    nataleDate,
    gender,
    entryDate,
    phone,
    email,
    role,
  } = req.body;


  const birthDate = new Date(nataleDate);
  const today = new Date();
  const diff = today.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);
  const edad = Math.abs(ageDate.getUTCFullYear() - 1970);

  try {
    const contract = await Contract.findByPk(contractId);

    if (!contract) {
      console.error("Contrato no encontrado");
      return res.status(404).json({ error: "Contrato no encontrado" });
    }

    const response = await createCoordinator(
      firstName,
      secondName,
      firstLastName,
      secondLastName,
      kindDoc,
      numberDoc,
      nataleDate,
      edad,
      gender,
      entryDate,
      phone,
      email,
      role,
      contractId
    );

    res
      .status(200)
      .send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createTeacherHandler = async (req, res) => {
  const coordinatorId = req.body.coordinatorId;
  const contractId = req.body.contractId;
  const {
    firstName,
    secondName,
    firstLastName,
    secondLastName,
    kindDoc,
    numberDoc,
    nataleDate,
    gender,
    entryDate,
    phone,
    email,
    role,
  } = req.body;


  const birthDate = new Date(nataleDate);
  const today = new Date();
  const diff = today.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  try {
    const coordinator = await Coordinator.findByPk(coordinatorId);

    if (!coordinator) {
      console.error("Coordinador no encontrado");
      return res.status(404).json({ error: "Coordinador no encontrado" });
    }

    const response = await createTeamIntervention(
      firstName,
      secondName,
      firstLastName,
      secondLastName,
      kindDoc,
      numberDoc,
      nataleDate,
      age,
      gender,
      entryDate,
      phone,
      email,
      role,
      coordinatorId, 
      contractId
    );
    res
      .status(200).send(response);
  } catch (error) {
    console.error("Error al crear el colaborador:", error);
    res.status(400).json({ error: error.message });
  }
};

const createGroupHandler = async (req, res) => {
  const {
    groupName,
    cuentameCode,
    address,
    municipality,
    neighborhood,
    contractId,
    coordinatorId,
  } = req.body;

  try {
    const response = await createGroup(
      groupName,
      cuentameCode,
      address,
      municipality,
      neighborhood,
      contractId,
      coordinatorId
    );
    res.status(200).send(response);
  } catch (error) {
    console.error("Error al crear el grupo:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCoordinatorHandler,
  createContractHandler,
  createTeacherHandler,
  createGroupHandler,
};
