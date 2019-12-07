import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

class Navbar extends Component {
  render() {
    console.log("nav");
    console.log(this.props.propss.history);
    let obj = this.props.propss.history.location;
    let user = {};
    if (obj.hasOwnProperty("state")) {
      if (obj.state) {
        user = obj.state.user;
      }
    }
    console.log(user);

    if (user) {
      return (
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/user/:id">Profile</Link>
          <Link to="/logout">Logout</Link>
        </nav>
      );
    }
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/user/:id">Profile</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    );
  }
}

export default Navbar;
