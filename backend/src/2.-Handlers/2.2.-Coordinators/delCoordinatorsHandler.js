const {
  deleteCollaborator,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.1.-DeletersControlleres/teacherDelController");

const {
  deleteGroup
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.1.-DeletersControlleres/groupDelController");


const deleteGroupHandlerCoordinators = async (req, res) => {
  const groupId = req.params.id;
  const coordinatorId = req.body.coordinatorId;
  try {
    const deleteGroupGroup = await deleteGroup(groupId, coordinatorId);
    res.status(200).json({
      message: "Grupo Eliminado correctamente",
      Colaborador: deleteGroup,
    });
  } catch (error) {
    //si err xq no existe
    if (error.message === "Employee not found") {
      res.status(404).json({ error: "Employee found" + error });
    } else {
      res.status(500).json({ error: "Internal Server Error" + error });
    }
  }
};


const deleteTeacherHandlerCoordinators = async (req, res) => {
  const teamInterventionId = req.params.id;
  const coordinatorId = req.body.coordinatorId;
  try {
    const deleteEmploy = await deleteCollaborator(teamInterventionId, coordinatorId);
    res.status(200).json({
      message: "Colaborador Eliminado correctamente",
      Colaborador: deleteEmploy,
    });
  } catch (error) {
    //si err xq no existe
    if (error.message === "Employee not found") {
      res.status(404).json({ error: "Employee found" + error });
    } else {
      res.status(500).json({ error: "Internal Server Error" + error });
    }
  }
};

const deleteUserHandlerCoordinators = (req, res) => {
  const userId = req.params.id;
  res.status(200).send(`Usuario no ${userId} eliminado por coordi`);
};

module.exports = {
  deleteGroupHandlerCoordinators,
  deleteTeacherHandlerCoordinators,
  deleteUserHandlerCoordinators,
};
