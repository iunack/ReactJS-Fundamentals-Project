import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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


export default Navbar;
