const sql = require('mssql');

const objectConnection = {
    "host": "tcp:dbserver-cinematum-app.database.windows.net",
    "port": 1433,
    "user": "cinematum",
    "password": "ZZXXyy99--++",
    "database": "CinematumApp"
}

const database = sql.createConnection(objectConnection);

database.connect((error) => {
  if(error) {
      console.log("error: ", error);
  } else {
      console.log("Base de datos conectada");
  }
});

module.exports = database;