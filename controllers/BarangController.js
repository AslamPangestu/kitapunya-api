var Barang = require("../models/Barang");

exports.getAll = function(req, res) {
  Barang.getAll(function(err, item) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", item);
    res.send(item);
  });
};

exports.create = function(req, res) {
  var item = new Barang(req.body);
  //handles null error
  if (!item.name) {
    res.status(400).send({ error: true, message: "Please provide Barang" });
  } else {
    Barang.create(item, function(err, item) {
      if (err) res.send(err);
      res.json(item);
    });
  }
};

exports.findById = function(req, res) {
  Barang.findById(req.params.id, function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.updateById = function(req, res) {
  Barang.updateById(req.params.id, new Barang(req.body), function(
    err,
    item
  ) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.deteleById = function(req, res) {
  Barang.deleteById(req.params.id, function(err, item) {
    if (err) res.send(err);
    res.json({ message: "Barang successfully deleted" });
  });
};
