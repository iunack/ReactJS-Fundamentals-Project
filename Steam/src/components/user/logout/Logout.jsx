import React, { useContext } from "react";
import userService from "../../../services/user-service";
import notify from "../../../services/notify";
import { AuthContext, initalUser } from "../../contexts/ContextWrapper";
import { Redirect } from "react-router-dom";

const Logout = () => {
  let [contextUser, setContextUser] = useContext(AuthContext);
  
  userService
    .logout()
    .then(res => {
      localStorage.removeItem("user");
      setContextUser(initalUser);
      notify.success(res.data.message);
    })
    .catch(err => {
      notify.error(err);
    });

  return <Redirect to="/" />;
};

export default Logout;
