const { getAccesControl } = require("../../4.-Controllers/4.4.-OthersControlleres/AccesController");

const getAccesHandlerAll = async (req, res) => {
  try {
    const email = req.body.email;
    const result = await getAccesControl(email);

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

module.exports = {
  getAccesHandlerAll,
};
