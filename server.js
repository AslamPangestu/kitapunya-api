require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

// set port
app.listen(port, () => console.log(`Node app is running on port ${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var authRoutes = require("./routes/auth"); //importing route
var roleRoutes = require("./routes/role"); //importing route
var categoryRoutes = require("./routes/category"); //importing route
var barangRoutes = require("./routes/barang"); //importing route
authRoutes(app);
roleRoutes(app); //register the route
categoryRoutes(app); //register the route
barangRoutes(app); //register the route
