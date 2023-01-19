const {Pool} = require('pg')
const Constans = require("../Constans")

const pool = new Pool({
    user: Constans.DB_USERS,
    password: Constans.DB_PASS,
    database:  Constans.DB_NAME,
    host:  Constans.DB_HOST,
    port:  Constans.DB_PORT,    
})


pool.connect(function (err) {
    if (err) throw err;
    console.log("Database connected");
  });
  
module.exports = {
    query: (text, params) => {
        return pool.query(text, params)
    }
}