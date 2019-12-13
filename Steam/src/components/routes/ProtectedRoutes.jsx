import React from "react";
import { Route, Redirect } from "react-router-dom";

export const GuestRoute = ({ isLoggedIn, ...props }) => {
  return !isLoggedIn ? <Route {...props} /> : <Redirect to="/" />;
};

export const LoggedInRoute = ({ isLoggedIn, ...props }) => {
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
};
