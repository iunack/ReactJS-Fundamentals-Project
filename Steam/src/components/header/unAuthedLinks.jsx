import React, { Fragment } from "react";
import {
  NavItem,
  NavLink
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";


const UnAuthedNavlinks = () => {
  return (
    <Fragment>
      <NavItem>
        <LinkContainer to="/login">
          <NavLink>Login</NavLink>
        </LinkContainer>
      </NavItem>
      <NavItem><NavLink>/</NavLink></NavItem>
      <NavItem>
        <LinkContainer to="/register">
          <NavLink>Register</NavLink>
        </LinkContainer>
      </NavItem>
    </Fragment>
  );
};

export default UnAuthedNavlinks;
