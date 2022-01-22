"use strict";

const response = require("../response");
const db = require("../settings/db");

exports.taxi = (req, res) => {
  db.query("SELECT * FROM `TaxiBD`", (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.status(rows, res);
    }
  });
};
