const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoogleBookSchema = new Schema({
  _id: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },

  title: {
    type: String,
    trim: true,
  },

  authors: {
    type: [String],
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  image: {
    type: String,
    trim: true,
  },

  link: {
    type: String,
    trim: true,
  },
});

const GoogleBook = mongoose.model('Book', GoogleBookSchema);

module.exports = GoogleBook;
