import React, { useContext } from "react";
import userService from "../../../services/user-service";
import notify from "../../../services/notify";
import { AuthContext, defaultUserContext } from "../../contexts/ContextWrapper";
import { Redirect } from "react-router-dom";

const Logout = props => {
  const {
    setUsername,
    setIsLoggedIn,
    setUserId,
    setAmount,
    setDlGames,
    setUplGames
  } = useContext(AuthContext);

  const setDefaultContextUser = () => {
    setIsLoggedIn(false);
    setUsername("");
    setUserId("");
    setAmount(0);
    setUplGames([]);
    setDlGames([]);
  };

  userService
    .logout()
    .then(res => {
      setDefaultContextUser();
      notify.success(res.data.message);
    })
    .catch(err => {
      notify.error(err);
    });

  return <Redirect to="/" />;
};

export default Logout;
