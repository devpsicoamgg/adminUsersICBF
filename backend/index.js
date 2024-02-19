require('dotenv').config();
const server = require("./src/server");
const { sequelize }
 = require("../backend/src/3.-DataBase/dataBaseConfig")
const { PORT_SERVER } = process.env;


server.listen(PORT_SERVER, () => {
  sequelize.sync({alter: true})
  console.log(`Server is live & listening on port 🎉 ${PORT_SERVER} 🎈`);
});