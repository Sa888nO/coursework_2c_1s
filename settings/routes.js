"use strict";

module.exports = (app) => {
  const indexController = require("../controller/indexController");
  const taxiController = require("../controller/taxiController");
  const peopleController = require("../controller/peopleController");

  app.route("/").get(indexController.index);
  app.route("/taxi").get(taxiController.taxi);
  app.route("/people").get(peopleController.people);
};
