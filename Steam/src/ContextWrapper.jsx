import React, { Component } from "react";
import NavigationRouter from "./NavigationRouter";
import Footer from "./components/footer";
import NavigationHeader from "./components/header/navigation";
import { Col, Container, Row } from "reactstrap";
import './style.css'

//Auth and Context Managment
class App extends Component {
  render() {
    return (
      <div className="bg-secondary text-light">
        <NavigationHeader />
        <Container className="d-flex justify-content-center steam-main-container">
          <Row>
            <Col >
              <NavigationRouter />
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
