import React, { Component, Fragment } from "react";
import userService from "../../../services/user-service";
import axios from "axios";
import Navbar from "../../common/navbar";

class Login extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleSubmit = e => {
    e.preventDefault();
    let user = { username: "test", password: "test" };

    userService.login(user).then(res => {
      console.log(res);
    });
    
    this.props.history.push({
      // pathname: "/logout",
      // search: "?query=abc",
      state: {
        user: {
          username: "adfadfadfadfadfad",
          password: "user"
        }
      }
    });
  };

  render() {
    console.log("login");
    console.log(this.props.history);

    return (
      <Fragment>
        <Navbar propss={this.props} />
        <form onSubmit={this.handleSubmit}>
          username
          <br />
          <input type="text" name="firstname" />
          <br />
          Last name:
          <br />
          <input type="text" name="lastname" />
          <button type="submit">Login</button>
        </form>
      </Fragment>
    );
  }
}

export default Login;
