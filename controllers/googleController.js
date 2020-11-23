const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController
module.exports = {
  // Searches the Google Books API and returns only unsaved books
  findAll: function(req, res) {
    const { query: params } = req;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${params.q}`;
    console.log("params", params);
    console.log("URL", url);

    // Returns results from the API with the specified info
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
