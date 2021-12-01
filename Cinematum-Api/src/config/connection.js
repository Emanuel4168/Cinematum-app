const sql = require('mssql');

const config = {
    "server": "dbserver-cinematum-app.database.windows.net",
    "user": "cinematum",
    "password": "ZZXXyy99--++",
    "database": "CinematumApp"
}
// "port": 1433, tcp:dbserver-cinematum-app.database.windows.net,

// const database = sql.createConnection(objectConnection);

const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool => {
    console.log('Connected to MSSQL')
    return pool
})
.catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
    sql,
    poolPromise
};