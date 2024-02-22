const { 
  getContractById
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.1.-GettersControllers/contractGetController")

const { 
  getAllCoordinatorsByContractId
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.1.-GettersControllers/coordinatorsGetController")


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



const getAllGroupsHandlerTeachers = (req, res) => {
  res.status(200).send(`TODOS LOS GRUPOS`);
};

const getGroupByIdHandlerTeachers = (req, res) => {
  const groupId = req.params.id;
  res.status(200).send(`Grupo no ${groupId} por profe`);
};

const getAllTeachersHandlerTeachers = (req, res) => {
  res.status(200).send(`TODOS LOS TEACHERS`);
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
