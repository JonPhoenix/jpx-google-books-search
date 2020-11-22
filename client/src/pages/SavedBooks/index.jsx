import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Book from "../../components/Book";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/BookList";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleBookDelete = (id) => {
    API.deleteBook(id).then((res) => this.getSavedBooks());
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
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book._id}
                      title={book.title}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import BookCard from "../../components/BookCard";

// function SavedPage() {
//   const [savedBooks, setSavedBooks] = useState([]);

//   const deleteBook = (event) => {
//     let id = event.target.getAttribute("id");
//     axios.delete("/api/books/" + id).then(() => {
//       setSavedBooks(savedBooks.filter((book) => book._id !== id));
//     });
//   };

//   useEffect(() => {
//     fetch("/api/books")
//       .then((result) => result.json())
//       .then((result) => {
//         setSavedBooks(result);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <section className="row border border-secondary p-3">
//         <div className="col">
//           <div className="card">
//             <div className="card-header">Saved</div>
//             <div className="card-body">
//               {savedBooks.map((book, index) => (
//                 <BookCard
//                   key={index}
//                   index={index}
//                   buttonText="Remove"
//                   buttonClicked={deleteBook}
//                   book={book}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default SavedPage;
