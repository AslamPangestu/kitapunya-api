const sql = require("../db");
const tabelName = "role";

var Model = function(item) {
  this.name = item.name;
  this.description = item.description;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Model.create = function(newItem, result) {
  sql.query(`INSERT INTO ${tabelName} set ?`, newItem, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Model.findById = function(id, result) {
  sql.query(`Select * from ${tabelName} where id = ? `, id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Model.getAll = function(result) {
  sql.query(`Select * from ${tabelName}`, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("role : ", res);

      result(null, res);
    }
  });
};

Model.updateById = function(id, item, result) {
  sql.query(
    `UPDATE ${tabelName} SET name = ? WHERE id = ?`,
    [item.name, id],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Model.deleteById = function(id, result) {
  sql.query(`DELETE FROM ${tabelName} WHERE id = ?`, [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Model;
