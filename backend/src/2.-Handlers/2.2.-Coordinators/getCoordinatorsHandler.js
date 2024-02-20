const {
  getContractById,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.2.-GettersControllers/contractGetController");

const {
  getAllCoordinatorsByContractId,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.2.-GettersControllers/coordinatorsGetController");

const {
  getAllGroups,
  getGroupById,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.2.-GettersControllers/groupGetController");

const {
  getAllMembersTeamIntervention,
  getMemberTeamInterventionById,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.2.-GettersControllers/teachersGetController");

const getContractByIdHandlerCoordinators = async (req, res) => {
  const contractId = req.params.id;
  const coordinatorId = req.body.coordinatorId;
  try {
    const result = await getContractById(contractId, coordinatorId);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in handler to get contract by ID", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

const getAllCoordinatorsByCoordinator = async (req, res) => {
  try {
    const contractId = req.params.contractId;
    const result = await getAllCoordinatorsByContractId(contractId);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in handler to get coordinators by contract", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

const getAllGroupsHandlerCoordinators = async (req, res) => {
  const coordinatorId = req.body.coordinatorId;
  try {
    const result = await getAllGroups(coordinatorId);
    res.status(200).json(result);
  } catch (error) {
    console.error(
      "Error en el controlador para obtener todos los grupos",
      error
    );
    res.status(500).json({
      success: false,
      error: "Error interno del servidor",
      details: error.message,
    });
  }
};

const getGroupByIdHandlerCoordinators = async (req, res) => {
  const groupId = req.params.id;
  const coordinatorId = req.body.coordinatorId;
  try {
    const result = await getGroupById(groupId, coordinatorId);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in handler to get contract by ID", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

const getAllTeachersHandlerCoordinators = async (req, res) => {
  const coordinatorId = req.body.coordinatorId;
  try {
    const result = await getAllMembersTeamIntervention(coordinatorId);
    res.status(200).json(result);
  } catch (error) {
    console.error(
      "Error en el controlador para obtener todos los docentes ",
      error
    );
    res.status(500).json({
      success: false,
      error: "Error interno del servidor",
      details: error.message,
    });
  }
};

const getTeacherByIdHandlerCoordinators = async (req, res) => {
  const groupId = req.params.id;
  const coordinatorId = req.body.coordinatorId;
  try {
    const result = await getMemberTeamInterventionById(groupId, coordinatorId);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in handler to get teacher by ID", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

const getAllUsersHandlerCoordinators = (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS POR COORDI`);
};

const getUserByIdHandlerCoordinators  = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Profesor no ${teacherId} POR COORDI`);
};

module.exports = {
  getAllGroupsHandlerCoordinators,
  getAllUsersHandlerCoordinators,
  getUserByIdHandlerCoordinators,
  getContractByIdHandlerCoordinators,
  getGroupByIdHandlerCoordinators,
  getAllTeachersHandlerCoordinators,
  getTeacherByIdHandlerCoordinators,
  getAllCoordinatorsByCoordinator,
};
