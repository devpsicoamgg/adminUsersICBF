const { 
  getContractById
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.1.-GettersControllers/contractGetController")

const { 
  getAllCoordinatorsByContractId
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.1.-GettersControllers/coordinatorsGetController")

const { 
  getAllMembersTeamIntervention
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.1.-GettersControllers/teachersGetController")

const { 
  getAllGroups, getGroupById
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.1.-GettersControllers/groupGetController")


const getContractByIdHandlerTeachers = async (req, res) => {
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


const getAllCoordinatorsHandlerTeachers = async (req, res) => {
  try {
    const contractId = req.params.id;
    const result = await getAllCoordinatorsByContractId(contractId);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in handler to get teachers by contract", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};


const getAllGroupsHandlerTeachers = async (req, res) => {
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

const getGroupByIdHandlerTeachers = async (req, res) => {
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


const getAllTeachersHandlerTeachers = async (req, res) => {
  const contractId = req.body.contractId;
  try {
    const result = await getAllMembersTeamIntervention(contractId);
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

const getAllUsersHandlerTeachers = (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS por teacher`);
};

const getUserByIdHandlerTeachers = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} por teacher`);
};


module.exports = {
  getAllCoordinatorsHandlerTeachers,
  getContractByIdHandlerTeachers,
  getAllUsersHandlerTeachers,
  getUserByIdHandlerTeachers,
  getAllGroupsHandlerTeachers,
  getGroupByIdHandlerTeachers,
  getAllTeachersHandlerTeachers,
};
