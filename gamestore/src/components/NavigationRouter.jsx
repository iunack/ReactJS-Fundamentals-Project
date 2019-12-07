import React from "react";
import Navbar from "./common/navbar";
import NotFoundPage from "./error-pages/not-found";
import Footer from "./common/footer";
import Home from "./home";
import Login from "./user/login";
import Register from "./user/register";
import Profile from "./user/profile";
import Logout from "./user/logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function NavigationRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/user/:id" component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default NavigationRouter;
