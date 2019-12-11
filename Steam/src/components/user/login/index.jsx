import React, { Component, Fragment } from "react";
import userService from "../../../services/user-service";
import axios from "axios";

import { Button, Form, FormGroup, Label, Input, FormText, Badge } from "reactstrap";

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
      <Form>
          <h1 className="steam-h1"> <Badge color="secondary">Login</Badge></h1>
        <FormGroup>
          <Label for="profileUsername">Username</Label>
          <Input
            type="text"
            name="username"
            id="profileUsername"
            placeholder="Enter your username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter your password"
          />
        </FormGroup>
        <Button color="primary" >Login</Button>
      </Form>
    );
  }
}

export default Login;
