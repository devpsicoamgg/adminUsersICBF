const { Coordinator } = require("../../3.-DataBase/dataBaseConfig");
const {
  createGroup,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.4.-PostersControlleres/groupPostController");

const {
  createTeamIntervention,
} = require("../../4.-Controllers/4.2.-CoordinatorsControllers/4.2.4.-PostersControlleres/teacherPostController");

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
};
