const {
  getContractById,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.1.2.-GettersControllers/contractGetController");

const {
  getAllCoordinatorsByContractId,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.1.2.-GettersControllers/coordinatorsGetController");


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
      details: error.message
    });
  }
};


const getAllGroupsHandlerCoordinators = (req, res) => {
  res.status(200).send(`TODOS LOS GRUPOS POR COORDI`);
};

const getGroupByIdHandlerCoordinators = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} POR COORDI`);
};

const getAllTeachersHandlerCoordinators = (req, res) => {
  res.status(200).send(`TODOS LOS TEACHERS POR COORDI`);
};

const getTeacherByIdHandlerCoordinators = (req, res) => {
  const teacherId = req.params.id;
  res.status(200).send(`Profesor no ${teacherId} POR COORDI`);
};


const getAllUsersHandlerCoordinators = (req, res) => {
  res.status(200).send(`TODOS LOS USUARIOS POR COORDI`);
};

const getUserByIdHandlerCoordinators = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} POR COORDI`);
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
}