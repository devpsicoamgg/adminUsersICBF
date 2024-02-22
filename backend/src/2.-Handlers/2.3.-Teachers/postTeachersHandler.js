const {
  createFinalUser,
} = require("../../4.-Controllers/4.3-TeamInterventionControllers/4.2.3.-PostersControlleres/teacherPostController");

const createUserHandlerTeachers = async (req, res) => {
  const userData = req.body; 
  try {
    const response = await createFinalUser(userData); 
    res.status(200).send(response);
  } catch (error) {
    console.error("Error al crear el grupo:", error);
    res.status(400).json({ error: error.message });
  }
};


module.exports = { 
  createUserHandlerTeachers, 
}