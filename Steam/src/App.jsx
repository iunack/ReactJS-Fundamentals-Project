import React from "react";
import NavigationHeader from "./components/header/Navigation";
import NavigationRouter from "./NavigationRouter";
import NotifyContainer from "./components/notifications/NotifyContainer";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./components/contexts/ContextWrapper";

import { Col, Container, Row } from "reactstrap";
import "./style.css";

const App = () => {
  return (
    <div className="bg-secondary text-light">
      <NotifyContainer />
      <AuthProvider>
        <NavigationHeader />
        <Container className="d-flex justify-content-center steam-main-container">
          <Row>
            <Col>
              <NavigationRouter />
              <Footer />
            </Col>
          </Row>
        </Container>
      </AuthProvider>
    </div>
  );
};

export default App;
