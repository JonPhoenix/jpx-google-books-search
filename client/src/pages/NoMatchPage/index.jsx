import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

// Creates a simple 404 Page Not Found
function NoMatch() {
  return (
    <>
      <Container>
        <div className="main-container">
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">404 Page Not Found</h1>
                <h1 className="text-center">
                  <span role="img" aria-label="Sparks and Weary Cat Emoji">
                    ✨🙀✨
                  </span>
                </h1>
              </Jumbotron>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default NoMatch;
