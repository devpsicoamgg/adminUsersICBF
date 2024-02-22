const { TeamIntervention } = require("../../../3.-DataBase/dataBaseConfig");

console.log(
  "2️⃣.-Controller 📥GET -COORDI-ROUTE -➡️",
  TeamIntervention,
  "y teacherById"
);

const getAllMembersTeamIntervention = async (contractId) => {
  try {
    const groups = await TeamIntervention.findAll({
      where: { contractId: contractId },
      attributes: [
        "id",
        "firstName",
        "secondName",
        "firstLastName",
        "secondLastName",
        "nataleDate",
        "phone",
        "email",
      ],
    });
    return {
      success: true,
      data: groups,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error interno del servidor" + error.message,
    };
  }
};



module.exports = {
  getAllMembersTeamIntervention,
};
