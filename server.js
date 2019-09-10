const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin12345",
  database: "dbkitapunya"
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Mysql Connected");
});

const app = express();
app.use(express.json());

// set port
app.listen(3000, () => console.log("Node app is running on port 3000"));
