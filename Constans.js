require("dotenv").config();

exports.PORT = process.env.PORT;
// CONFIG DB
exports.DB_USERS = process.env.DB_USERS,
exports.DB_PASS =  process.env.DB_PASS,
exports.DB_NAME =  process.env.DB_NAME,
exports.DB_HOST =  process.env.DB_HOST,
exports.DB_PORT =  process.env.DB_PORT