import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/img/Logo.png";
import "./index.css";
export const NavigationBar = () => {
  return (
    <Navbar id="navbar-example2" className="fixed-top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img width={"52"} src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#writing">Writing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
