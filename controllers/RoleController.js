var Role = require("../models/Role");

exports.getAll = (req, res) => {
  Role.getAll((err, items) => {
    if (items.length === 0) {
      res.status(204).json({
        status: 204,
        message: "Roles is kosong"
      });
    } else if (items === undefined) {
      res.status(404).json({
        status: 404,
        message: "Roles not found"
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Success get all roles",
        data: items
      });
    }
  });
};

exports.create = function(req, res) {
  var item = new Role(req.body);
  //handles null error
  if (!item.name || !item.description) {
    res
      .status(400)
      .send({ error: true, message: "Please provide role name / status" });
  } else {
    Role.create(item, function(err, item) {
      if (err) res.send(err);
      res.json(item);
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
