"use strict";

const response = require("../response");
const db = require("../settings/db");

exports.people = (req, res) => {
  db.query("SELECT * FROM `PeopleBD`", (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.status(rows, res);
    }
  });
};
