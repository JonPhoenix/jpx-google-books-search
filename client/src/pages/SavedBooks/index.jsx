import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../../components/BookCard";

function SavedPage() {
  const [savedBooks, setSavedBooks] = useState([]);

  const deleteBook = (event) => {
    let id = event.target.getAttribute("id");
    axios.delete("/api/books/" + id).then(() => {
      setSavedBooks(savedBooks.filter((book) => book._id !== id));
    });
  };

  useEffect(() => {
    fetch("/api/books")
      .then((result) => result.json())
      .then((result) => {
        setSavedBooks(result);
      });
  }, []);

  return (
    <div className="container">
      <section className="row border border-secondary p-3">
        <div className="col">
          <div className="card">
            <div className="card-header">Saved</div>
            <div className="card-body">
              {savedBooks.map((book, index) => (
                <BookCard
                  key={index}
                  index={index}
                  buttonText="Remove"
                  buttonClicked={deleteBook}
                  book={book}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SavedPage;
