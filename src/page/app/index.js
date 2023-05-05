import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "../auth";
import Register from "../auth/register";
import Dashboard from "../dashboard";
import Books from "../book";
import NewBook from "../book/newbook";


import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/dashboard">Amazing Book Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/auth">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Route path="/auth" component={LoginPage} />
             <Route path="/register" component={Register} />
             <Route path="/dashboard" component={Dashboard} />
             <Route path="/book" component={Books} />
             <Route path="/newBook" component={NewBook} />
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
