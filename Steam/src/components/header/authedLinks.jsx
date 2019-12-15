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
  const { username, amount, userId, dlGames, uplGames } = useContext(
    AuthContext
  );
  const uploadCount = uplGames ? uplGames.length : 0;
  const purchaseCount = dlGames ? dlGames.length : 0;

  return (
    <Fragment>
      <NavItem>
        <NavLink>{`[   ${uploadCount}   Uploaded ]`}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>{`[   ${purchaseCount}   Purchased ]`}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>{amount} $</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {`[  Hallo ${username}  ]`}
        </DropdownToggle>
        <DropdownMenu right>
          <LinkContainer to={`/user/${userId}`}>
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
