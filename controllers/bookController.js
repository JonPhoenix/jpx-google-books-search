const db = require('../models');

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("req.query", req.query); // Delete at final review
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    //
    db.Book.findById(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    //
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    //
    db.Book.findOneAndUpdate({ id: req.params.id }, req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    //
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
