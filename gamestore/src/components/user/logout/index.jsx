import React, { Component } from "react";
import Navbar from "../../common/navbar";

class Logout extends Component {
  render() {
    this.props.history.push({
      pathname: "/",
      // search: "?query=abc",
      state: {}
    });

    return (
      <div>
        <Navbar propss={this.props} />
        Logout
      </div>
    );
  }
}

export default Logout;
