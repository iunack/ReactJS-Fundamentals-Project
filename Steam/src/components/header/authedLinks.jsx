import React, { Fragment } from "react";
import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";


const AuthedNavlinks = () => {
  return (
    <Fragment>
      <NavItem>
        <LinkContainer to="/addMoney">
          <NavLink>100,00 $</NavLink>
        </LinkContainer>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          MyProfile
        </DropdownToggle>
        <DropdownMenu right>
          <LinkContainer to="/logout">
            <DropdownItem>My Profile</DropdownItem>
          </LinkContainer>
          <LinkContainer to="/addMoney">
            <DropdownItem>Add Money</DropdownItem>
          </LinkContainer>
          <LinkContainer to="/addGame">
            <DropdownItem>Add Game</DropdownItem>
          </LinkContainer>
          <DropdownItem divider />
          <LinkContainer to="/logout">
            <DropdownItem>Logout</DropdownItem>
          </LinkContainer>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Fragment>
  );
};

export default AuthedNavlinks;
