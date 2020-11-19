const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
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

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
