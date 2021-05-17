import React, { useState } from "react";

import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import logoname from "../../images/logoname.png"
import { Container } from "@material-ui/core";
export default function Header() {
  
  return (
    
  <Container>
    <Navbar bg="dark" expand="lg" className="navbr" fixed="top" variant="dark">
  <Navbar.Brand href="/"><img className="logoname" src={logoname} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="ml-auto" >
      <Nav.Link href="/" >HOME</Nav.Link>
      <Nav.Link href="/about">ABOUT</Nav.Link>
      <Nav.Link href="/stack">STACK</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Container>
  );
}
