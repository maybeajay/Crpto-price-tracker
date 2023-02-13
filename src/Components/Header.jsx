import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <>
      <Navbar variant="dark" sticky="top">
        <Container>
          <Navbar.Brand to="/">Crytpo Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to='/watchlist'>My Watchlist</Nav.Link>
            <Nav.Link as={Link}to="/about">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
