import React, { useState } from "react";
import axios from "axios";
import BookCard from "../../components/BookCard";

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const addBook = (event) => {
    let bookIndex = parseInt(event.target.getAttribute("index"));
    axios.post("/api/books", searchResults[bookIndex]);
  };

  const search = (event) => {
    event.preventDefault();
    let searchString = event.target.searchinput.value;
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchString)
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result.items); // Delete in final review

        setSearchResults(
          result.items.map((book) => {
            return {
              _id: book.id,
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              // Reads property thumbnail every search
              image:
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : book.volumeInfo.imageLinks.thumbnail,
              link: book.volumeInfo.previewLink,
            };
          })
        );
      });
  };

  return (
    <div className="container">
      <section className="row border border-secondary p-3 mb-5">
        <div className="col">
          <form onSubmit={search}>
            <div className="form-group">
              <label>Search</label>
              <input
                type="text"
                className="form-control"
                name="searchinput"
                placeholder="Enter Book Name"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </section>
      <section className="row border border-secondary p-3">
        <div className="col">
          <div className="card">
            <div className="card-header">Results</div>
            <div className="card-body">
              {searchResults.map((result, index) => (
                <BookCard
                  key={index}
                  index={index}
                  buttonText="Add"
                  buttonClicked={addBook}
                  book={result}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
