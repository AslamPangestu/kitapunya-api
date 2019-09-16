var User = require("../models/User");

exports.getAll = function(req, res) {
  User.getAll(function(err, item) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", item);
    res.send(item);
  });
};

exports.register = function(req, res) {
  var item = new User(req.body);
  //handles null error
  if (
    !item.full_name ||
    !item.password ||
    !item.email ||
    !item.description ||
    !item.path_photo ||
    !item.role_id
  ) {
    res
      .status(400)
      .send({ error: true, message: "Please provide User name / status" });
  } else {
    User.findByEmail(item.email, function(err, item) {
      if (err) res.send(err);
      if(item.length !=0){
          return ''
      }
      res.json(item);
    });
    // User.create(item, function(err, item) {
    //   if (err) res.send(err);
    //   res.json(item);
    // });
  }
};

exports.findById = function(req, res) {
  User.findById(req.params.id, function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.updateById = function(req, res) {
  User.updateById(req.params.id, new User(req.body), function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.deteleById = function(req, res) {
  User.deleteById(req.params.id, function(err, item) {
    if (err) res.send(err);
    res.json({ message: "User successfully deleted" });
  });
};
