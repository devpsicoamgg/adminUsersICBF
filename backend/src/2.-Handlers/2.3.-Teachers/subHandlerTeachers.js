const getCoordinatorsHandler = require("./getCoordinatorsHandler");

const {
  getContractByIdHandlerTeachers,
  getAllCoordinatorsHandlerTeachers,
  getAllGroupsHandlerTeachers, 
  getGroupById
  
} = getTeachersHandler;


module.exports = {
  getAllCoordinatorsHandlerTeachers,
  getContractByIdHandlerTeachers,
  getAllGroupsHandlerTeachers,
  getGroupById
};
