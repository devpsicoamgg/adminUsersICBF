const {
  getAllContracts,
  getContractById,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.2.-GettersControllers/contractGetController");

const {
  getAllCoordinators,
  getCoordinatorById,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.2.-GettersControllers/coordinatorsGetController");

const {
  getAllGroups,
  getGroupById,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.2.-GettersControllers/groupGetController");

const {
  getAllMembersTeamIntervention,
  getMemberTeamInterventionById,
} = require("../../4.-Controllers/4.1.-AdminControllers/4.1.2.-GettersControllers/teachersGetController");

const getContractsHandlerAdmin = async (req, res) => {
  try {
    const result = await getAllContracts();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in handler to get all contracts", error);
    res.status(500).json({
      success: false,
      error: "Internal several error",
      details: error.message,
    });
  }
};

const getContractByIdHandlerAdmin = async (req, res) => {
  const contractId = req.params.id;
  try {
    const result = await getContractById(contractId);
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

const getCoordinatorsHandlerAdmin = async (req, res) => {
  try {
    const result = await getAllCoordinators();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in handler to get all coordinators", error);
    res.status(500).json({
      success: false,
      error: "Internal several error",
      details: error.message,
    });
  }
};

const getCoordinatorByIdHandlerAdmin = async (req, res) => {
  const coordinatorId = req.params.id;
  try {
    const result = await getCoordinatorById(coordinatorId);
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

const getGroupsHandlerAdmin = async (req, res) => {
  try {
    const result = await getAllGroups();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in handler to get all groups", error);
    res.status(500).json({
      success: false,
      error: "Internal several error",
      details: error.message,
    });
  }
};

const getGroupByIdHandlerAdmin = async (req, res) => {
  const groupId = req.params.id;
  try {
    const result = await getGroupById(groupId);
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

const getTeachersHandlerAdmin = async (req, res) => {
  try {
    const result = await getAllMembersTeamIntervention();
    res.status(200).json(result);
  } catch (error) {
    console.error(
      "Error in handler to get all members team intervention",
      error
    );
    res.status(500).json({
      success: false,
      error: "Internal several error",
      details: error.message,
    });
  }
};

const getTeachersByIdHandlerAdmin = async (req, res) => {
  const teacherId = req.params.id;
  try {
    const result = await getMemberTeamInterventionById(teacherId);
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

const getUsersHandlerAdmin = (req, res) => {
  res.status(200).send(`Obtener todos los usuarios por admin`);
};

const getUserByIdHandlerAdmin = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Obtener usuario No ${userId}`);
};

module.exports = {
  getCoordinatorsHandlerAdmin,
  getCoordinatorByIdHandlerAdmin,
  getUsersHandlerAdmin,
  getContractsHandlerAdmin,
  getContractByIdHandlerAdmin,
  getUserByIdHandlerAdmin,
  getGroupsHandlerAdmin,
  getGroupByIdHandlerAdmin,
  getTeachersByIdHandlerAdmin,
  getTeachersHandlerAdmin,
};
