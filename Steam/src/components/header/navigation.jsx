import React, { useState, useContext } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

import AuthedNavlinks from "./AuthedLinks";
import UnAuthedNavlinks from "./UnAuthedLinks";
import { AuthContext } from "../contexts/ContextWrapper";

const NavigationHeader = () => {
  const {isLoggedIn} = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="cust-nav bg-primary" color="light" light expand="md">
      <LinkContainer to="/">
        <NavbarBrand>Steam Store</NavbarBrand>
      </LinkContainer>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        </Nav>
        <Nav navbar>
          {isLoggedIn ? <AuthedNavlinks /> : <UnAuthedNavlinks />}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationHeader;
