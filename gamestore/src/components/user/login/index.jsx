import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(
      axios
        .get("http://localhost:9999/api/user/5dacbf1624f00c32c8810ca4")
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    );
  };

  render() {
    return (
      <div>
        <span>Login</span>
        <button onClick={this.handleSubmit}>Click</button>
      </div>
    );
  }
}

export default Login;
