import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

import Search from "../search";
import AuthedNavlinks from "./authedLinks";
import UnAuthedNavlinks from "./unAuthedLinks";

const NavigationHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let user = false;
  const isLoggedIn = user;

  return (
    <Navbar className="cust-nav bg-primary" color="light" light expand="md">
      <LinkContainer to="/">
        <NavbarBrand>Steam Store</NavbarBrand>
      </LinkContainer>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <Search />
        </Nav>
        <Nav navbar>
          {isLoggedIn ? <AuthedNavlinks /> : <UnAuthedNavlinks />}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationHeader;
