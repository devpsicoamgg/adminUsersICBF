const {
  deleteContract,
} = require("../../4.-Controllers/4.1.-DeletersControllers/contractDelController");

const {
  deleteGroup,
} = require("../../4.-Controllers/4.1.-DeletersControllers/groupDelController");

const {
  deleteCoordinator,
} = require("../../4.-Controllers/4.1.-DeletersControllers/coordinatorDelController");

const {
  deleteCollaborator,
} = require("../../4.-Controllers/4.1.-DeletersControllers/teacherDelController");

const delAdminHandlerContract = async (req, res) => {
  const contractId = req.params.id;
  try {
    const deleteInfo = await deleteContract(contractId);
    res.status(200).json({
      message: "Contrato Eliminado correctamente",
      contrato: deleteInfo,
    });
  } catch (error) {
    console.error("Error in the contract delete handler:", error);
    //si err xq no existe
    if (error.message === "Contract not found") {
      res.status(404).json({ error: "Contract found" });
    } else {
      //si err x interno
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const delAdminHandlerCoordinator = async (req, res) => {
  const coordinatorId = req.params.id;
  try {
    const deleteEmploy = await deleteCoordinator(coordinatorId);
    res.status(200).json({
      message: "Coordinador Eliminado correctamente",
      contrato: deleteEmploy,
    });
  } catch (error) {
    console.error("Error in the coordinator delete handler:", error);
    //si err xq no existe
    if (error.message === "Coordinator not found") {
      res.status(404).json({ error: "Coordinator found" });
    } else {
      //si err x interno
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const delAdminHandlerGroup = async (req, res) => {
  const groupId = req.params.id;
  try {
    const deleteInfo = await deleteGroup(groupId);
    res.status(200).json({
      message: "Grupo eliminado correctamente",
      contrato: deleteInfo,
    });
  } catch (error) {
    console.error("Error in the group delete handler:", error);
    //si err xq no existe
    if (error.message === "Group not found") {
      res.status(404).json({ error: "Group found" });
    } else {
      //si err x interno
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const delAdminHandlerTeacher = async (req, res) => {
  const teamInterventionId = req.params.id;
  try {
    const deleteEmploy = await deleteCollaborator(teamInterventionId);
    res.status(200).json({
      message: "Colaborador Eliminado correctamente",
      Colaborador: deleteEmploy,
    });
  } catch (error) {
    console.error("Error in the employee delete handler:", error);
    //si err xq no existe
    if (error.message === "Employee not found") {
      res.status(404).json({ error: "Employee found" });
    } else {
      //si err x interno
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = {
  delAdminHandlerCoordinator,
  delAdminHandlerGroup,
  delAdminHandlerTeacher,
  delAdminHandlerContract,
};
