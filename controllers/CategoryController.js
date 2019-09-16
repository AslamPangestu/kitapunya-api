var Category = require("../models/Category");

exports.getAll = function(req, res) {
  Category.getAll(function(err, item) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", item);
    res.send(item);
  });
};

exports.create = function(req, res) {
  var item = new Category(req.body);
  //handles null error
  if (!item.name) {
    res
      .status(400)
      .send({ error: true, message: "Please provide Category" });
  } else {
    Category.create(item, function(err, item) {
      if (err) res.send(err);
      res.json(item);
    });
  }
};

exports.findById = function(req, res) {
  Category.findById(req.params.id, function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.updateById = function(req, res) {
  Category.updateById(req.params.id, new Category(req.body), function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.deteleById = function(req, res) {
  Category.deleteById(req.params.id, function(err, item) {
    if (err) res.send(err);
    res.json({ message: "Category successfully deleted" });
  });
};
