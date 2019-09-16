require('dotenv').config()

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Mysql Connected");
});

// set port
app.listen(3000, () => console.log("Node app is running on port 3000"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/role"); //importing route
routes(app); //register the route
