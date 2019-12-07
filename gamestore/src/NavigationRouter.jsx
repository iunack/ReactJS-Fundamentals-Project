import React from "react";
import Navbar from "./components/common/navbar";
import NotFoundPage from "./components/error-pages/not-found";
import Footer from "./components/common/footer";
import Home from "./components/home";
import Login from "./components/user/login";
import Register from "./components/user/register";
import Profile from "./components/user/profile";
import Logout from "./components/user/logout";
import { Switch, Route } from "react-router-dom";

const NavigationRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/logout" component={Logout} />
      <Route path="/user/:id" component={Profile} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default NavigationRouter;
