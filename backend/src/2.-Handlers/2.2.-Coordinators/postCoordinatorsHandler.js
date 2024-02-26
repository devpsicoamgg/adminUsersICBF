const { Coordinator } = require("../../3.-DataBase/dataBaseConfig");
const { createGroup } = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.4.-PostersControlleres/groupPostController");
const { createTeamIntervention } = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.4.-PostersControlleres/teacherPostController");
const { createPsySocialByCoordinator } = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.4.-PostersControlleres/PsycoSocialPostController");
const { createHealthAndNutritionByCoordinator } = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.4.-PostersControlleres/HealthAndNutritionPostController");


const createTeacherHandlerCoordinators = async (req, res) => {
  try {
    const { coordinatorId, contractId, groupId, ...userData } = req.body;

    const birthDate = new Date(userData.nataleDate);
    const today = new Date();
    const diff = today.getTime() - birthDate.getTime();
    const ageDate = new Date(diff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    const coordinator = await Coordinator.findByPk(coordinatorId);
    if (!coordinator) {
      console.error("Coordinador no encontrado");
      return res.status(404).json({ error: "Coordinador no encontrado" });
    }

    if (!contractId || !groupId) {
      console.error("Grupo y contratos requeridos");
      return res.status(404).json({ error: "Grupo y contrato requerido" });
    }

    const response = await createTeamIntervention({
      ...userData,
      coordinatorId,
      contractId,
      groupId,
      age,
    });

    res.status(200).send(response);
  } catch (error) {
    console.error("Error al crear el profesor:", error);
    res.status(400).json({ error: error.message, error });
  }
};

const createPsySocialHandlerCoordinator = async (req, res) => {
  const coordinatorId = req.body.coordinatorId;
  const contractId = req.body.contractId;
  const groupId = req.body.groupId;
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

    const response = await createPsySocialByCoordinator(
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
      contractId,
      groupId,
    );
    res.status(200).send(response);
  } catch (error) {
    console.error("Error al crear el psicosocial:", error);
    res.status(400).json({ error: error.message });
  }
};

const createNutriHandlerCoordinator = async (req, res) => {
  const coordinatorId = req.body.coordinatorId;
  const contractId = req.body.contractId;
  const groupId = req.body.groupId;
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

    const response = await createHealthAndNutritionByCoordinator(
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
      contractId,
      groupId,
    );
    res.status(200).send(response);
  } catch (error) {
    console.error("Error al crear el psicosocial:", error);
    res.status(400).json({ error: error.message });
  }
};

const createGroupHandlerCoordinators = async (req, res) => {
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
    res.status(400).json({ error: error.message, error });
  }
};


module.exports = {
  createGroupHandlerCoordinators,
  createTeacherHandlerCoordinators,
  createPsySocialHandlerCoordinator,
  createNutriHandlerCoordinator,
};
