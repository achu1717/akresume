import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {Navbar, Nav, Form, FormControl,Button,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import { Container } from "@material-ui/core";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    
  <Container>
    <Navbar bg="dark" expand="lg" className="navbr" fixed="top" variant="dark">
  <Navbar.Brand href="/">AKSHAY SURESH</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="ml-auto" >
      <Nav.Link href="/" id="navlnks">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Container>
  );
}
