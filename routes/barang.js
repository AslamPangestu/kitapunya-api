module.exports = function(app) {
    var controller = require("../controllers/BarangController");
  
    app
      .route("/api/v1/barang")
      .get(controller.getAll)
      .post(controller.create);
  
    app
      .route("/api/v1/barang/:id")
      .get(controller.findById)
      .put(controller.updateById)
      .delete(controller.deteleById);
  };
  