module.exports = function(app) {
    var controller = require("../controllers/CategoryController");
  
    app
      .route("/api/v1/category")
      .get(controller.getAll)
      .post(controller.create);
  
    app
      .route("/api/v1/category/:id")
      .get(controller.findById)
      .put(controller.updateById)
      .delete(controller.deteleById);
  };
  