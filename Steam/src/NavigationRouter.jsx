import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./components/not-found-page/NotFoundPage";
import Home from "./components/home/Home";
import Login from "./components/user/login/Login";
import Register from "./components/user/register/Register";
import Profile from "./components/user/profile";
import AddAmount from './components/user/amount/AddAmount';
import Logout from "./components/user/logout/Logout";
import CreateGame from './components/game/CreateGame';
import { GuestRoute, LoggedInRoute } from "./components/routes/ProtectedRoutes";
import { AuthContext } from "./components/contexts/ContextWrapper";

const NavigationRouter = () => {
  const { isLoggedIn } = useContext(AuthContext);
  
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <GuestRoute isLoggedIn={isLoggedIn} path="/login" component={Login} />
      <GuestRoute isLoggedIn={isLoggedIn} path="/register" component={Register} />

      <LoggedInRoute isLoggedIn={isLoggedIn} path="/logout" component={Logout} />
      <LoggedInRoute isLoggedIn={isLoggedIn} path="/user/profile" component={Profile} />
      <LoggedInRoute isLoggedIn={isLoggedIn} path="/user/addMoney" component={AddAmount} />
      <LoggedInRoute isLoggedIn={isLoggedIn} path="/game/create" component={CreateGame} />

      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default NavigationRouter;
