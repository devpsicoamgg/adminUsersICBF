const { getAccesControl } = require("../../4.-Controllers/4.4.-OthersControlleres/AccesController");

const getAccesHandlerAll = async (req, res) => {
  try {
    const { email, password } = req.query; 
    const result = await getAccesControl(email, password);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error in handler ", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
};

module.exports = {
  getAccesHandlerAll,
};
