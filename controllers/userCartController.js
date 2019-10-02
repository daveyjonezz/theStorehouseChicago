const db = require("../models");
// Defining methods for the booksController - database - based in SavedBooks Page
//find all results in Book database
module.exports = {
  findAll: function(req, res) {
    db.usershoppingcart.find(req.query)
      .then(dbusershoppingcart => 
        {res.json(dbusershoppingcart)})
      .catch(err => res.status(422).json(err));
  },
  //find books by id
  findById: function(req, res) {
    db.usershoppingcart
      .findById(req.params.id)
      .then(dbusershoppingcart => res.json(dbusershoppingcart))
      .catch(err => res.status(422).json(err));
  },
  //create new entry in database - save book
  create: function(req, res) {
  console.log(req.body, "===============================")
    db.usershoppingcart
      .create(req.body)
      .then(dbusershoppingcart => res.json(dbusershoppingcart))
      // .catch(err => console.log(err))
      .catch(err => res.status(422).json(err));
  },
  //will not need to update info (?)
  update: function(req, res) {
    db.usershoppingcart
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbusershoppingcart => res.json(dbusershoppingcart))
      .catch(err => res.status(422).json(err));
  },
  //delete data entry by id
  remove: function(req, res) {
    db.usershoppingcart
      .findById({ _id: req.params.id })
      .then(dbusershoppingcart => dbusershoppingcart.remove())
      .then(dbusershoppingcart => res.json(dbusershoppingcart))
      .catch(err => res.status(422).json(err));
  }
};