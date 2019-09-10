module.exports = function(app) {
  var controller = require("../controllers/AuthController");

  // List Routes
  app
    .route("/api/v1/login")
    .post(controller.create_a_task);

  app
    .route("/api/v1/register")
    .post(controller.update_a_task);
};
