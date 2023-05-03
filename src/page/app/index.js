import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "../auth";
/* import About from "../about";
import ListTasks from "../listTasks"; */

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Book</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/auth">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Route path="/auth" component={LoginPage} />
             {/*  <Route path="/tasks" component={ListTasks} />
              <Route path="/about" component={About} /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
