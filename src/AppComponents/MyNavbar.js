import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import murti from "../Images/murti.png";

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img alt="" src={murti} className="navbar_img" />{" "}
        <Navbar.Brand href="#home"> Ancient India</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="More Items" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Item 4 after divider
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
