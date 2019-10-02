const db = require("../models");

// Defining methods for the newsletterController
module.exports = {
  newSubscription: function(req, res) {
    console.log("test controller"+req.body)
    db.Email
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};