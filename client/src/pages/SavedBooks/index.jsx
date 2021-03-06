import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Book from "../../components/Book";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Saved extends Component {
  state = {
    books: [],
  };

  // The component mounts and gets the saved books
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

  // Deletes a book from the db with a given id
  // Then reloads the saved books from the db
  handleBookDelete = (id) => {
    API.deleteBook(id).then(() => this.getSavedBooks());
  };

  render() {
    return (
      <>
        <Container>
          <div className="main-container">
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1 className="text-center">Google Books Search</h1>
                  <h3 id="title" className="text-center">
                    Your Personal Library
                  </h3>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <Card title="Saved Books">
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
                    <h3 id="title" className="text-center">
                      No Saved Books!
                    </h3>
                  )}
                </Card>
              </Col>
            </Row>
            <Footer />
          </div>
        </Container>
      </>
    );
  }
}

export default Saved;
