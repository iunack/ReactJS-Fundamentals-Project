import React, { Fragment, useContext } from "react";
import { AuthContext } from "../contexts/ContextWrapper";
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

const AuthedNavlinks = props => {
  const { username, amount } = useContext(AuthContext);

  return (
    <Fragment>
      <NavItem>
        <LinkContainer to="/games">
          <NavLink>All Games</NavLink>
        </LinkContainer>
      </NavItem>
      <NavItem>
          <NavLink>{amount} $</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {`[  Hallo ${username}  ]`}
        </DropdownToggle>
        <DropdownMenu right>
          <LinkContainer to="/user/profile">
            <DropdownItem>My Profile</DropdownItem>
          </LinkContainer>
          <LinkContainer to="/user/addMoney">
            <DropdownItem>Add Money</DropdownItem>
          </LinkContainer>
          <LinkContainer to="/game/create">
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
