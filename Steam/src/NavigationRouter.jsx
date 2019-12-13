import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./components/not-found-page/NotFoundPage";
import Home from "./components/home/Home";
import Login from "./components/user/login/Login";
import Register from "./components/user/register/Register";
import Profile from "./components/user/profile";
import Logout from "./components/user/logout/Logout";
import { GuestRoute, LoggedInRoute } from "./components/routes/ProtectedRoutes";
import { AuthContext } from "./components/contexts/ContextWrapper";

const NavigationRouter = () => {
  const [user] = useContext(AuthContext);
  
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <GuestRoute isLoggedIn={user.isLoggedIn} path="/login" component={Login} />
      <GuestRoute isLoggedIn={user.isLoggedIn} path="/register" component={Register} />

      <LoggedInRoute isLoggedIn={user.isLoggedIn} path="/logout" component={Logout} />
      <LoggedInRoute isLoggedIn={user.isLoggedIn} path="/user/profile" component={Profile} />

      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default NavigationRouter;
