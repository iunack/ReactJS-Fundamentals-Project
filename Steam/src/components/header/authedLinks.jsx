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

const AuthedNavlinks = (props) => {
  const [contextUser] = useContext(AuthContext);
  const amount = contextUser.amount;
  const username = contextUser.username;

  return (
    <Fragment>
      <NavItem>
        <LinkContainer to="/games">
          <NavLink>All Games</NavLink>
        </LinkContainer>
      </NavItem>
      <NavItem>
        <LinkContainer to="/addMoney">
          <NavLink>{amount} $</NavLink>
        </LinkContainer>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {`[  Hallo ${username}  ]`}
        </DropdownToggle>
        <DropdownMenu right>
          <LinkContainer to="/my">
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
