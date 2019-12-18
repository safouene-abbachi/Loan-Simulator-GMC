import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "../components/header.css";

export default class Header extends Component {
  render() {
    return (
      <Navbar className="nav" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#pricing">pricing</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#About Us">About Us</Nav.Link>
        </Nav>

        <Button className="btn" variant="outline-success">
          LOG IN
        </Button>
        <Button className="btn" variant="outline-info">
          Create Account
        </Button>
      </Navbar>
    );
  }
}
