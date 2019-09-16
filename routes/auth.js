module.exports = function(app) {
  var controller = require("../controllers/AuthController");

  // List Routes
  app.route("/api/v1/register").post(controller.register);
};
