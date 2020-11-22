import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Book from "../../components/Book";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/BookGrid";
import { List } from "../../components/BookList";

class SearchBooks extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query",
        })
      );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = (id) => {
    const book = this.state.books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search n Save</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-success ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default SearchBooks;

// import React, { useState } from "react";
// import axios from "axios";
// import BookCard from "../../components/BookCard";

// function SearchPage() {
//   const [searchResults, setSearchResults] = useState([]);

//   const addBook = (event) => {
//     let bookIndex = parseInt(event.target.getAttribute("index"));
//     axios.post("/api/books", searchResults[bookIndex]);
//   };

//   const search = (event) => {
//     event.preventDefault();
//     let searchString = event.target.searchinput.value;
//     fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchString)
//       .then((resp) => resp.json())
//       .then((result) => {
//         console.log(result.items); // Delete in final review

//         setSearchResults(
//           result.items.map((book) => {
//             return {
//               _id: book.id,
//               title: book.volumeInfo.title,
//               authors: book.volumeInfo.authors,
//               description: book.volumeInfo.description,
//               // Reads property thumbnail every search
//               image:
//                 book.volumeInfo.imageLinks === undefined
//                   ? ""
//                   : book.volumeInfo.imageLinks.thumbnail,
//               link: book.volumeInfo.previewLink,
//             };
//           })
//         );
//       });
//   };

//   return (
//     <div className="container">
//       <section className="row border border-secondary p-3 mb-5">
//         <div className="col">
//           <form onSubmit={search}>
//             <div className="form-group">
//               <label>Search</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="searchinput"
//                 placeholder="Enter Book Name"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Search
//             </button>
//           </form>
//         </div>
//       </section>
//       <section className="row border border-secondary p-3">
//         <div className="col">
//           <div className="card">
//             <div className="card-header">Results</div>
//             <div className="card-body">
//               {searchResults.map((result, index) => (
//                 <BookCard
//                   key={index}
//                   index={index}
//                   buttonText="Add"
//                   buttonClicked={addBook}
//                   book={result}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default SearchPage;
