var Role = require("../models/Role");

exports.getAll = function(req, res) {
  Role.getAll(function(err, item) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", item);
    res.send(item);
  });
};

exports.create = function(req, res) {
  var item = new Role(req.body);
  //handles null error
  if (!item.name || !item.description) {
    res
      .status(400)
      .send({ error: true, message: "Please provide Role/status" });
  } else {
    Role.create(item, function(err, Role) {
      if (err) res.send(err);
      res.json(Role);
    });
  }
};

exports.findById = function(req, res) {
  Role.findById(req.params.id, function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.updateById = function(req, res) {
  Role.updateById(req.params.id, new Role(req.body), function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.deteleById = function(req, res) {
  Role.deleteById(req.params.id, function(err, item) {
    if (err) res.send(err);
    res.json({ message: "Role successfully deleted" });
  });
};
