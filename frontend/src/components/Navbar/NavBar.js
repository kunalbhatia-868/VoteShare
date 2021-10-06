import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar class="full-navbar" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: 24, fontWeight: 500 }}>
            VoteShare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/">Signup</Nav.Link>
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
