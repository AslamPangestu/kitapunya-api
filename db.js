const mysql = require("mysql");

//local mysql db connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Mysql Connected");
});

module.exports = connection;
