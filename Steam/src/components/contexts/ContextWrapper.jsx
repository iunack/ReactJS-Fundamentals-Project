import React, { useState, createContext } from "react";

export const AuthContext = createContext();

let defaultUserContext = {
  isLoggedIn: false,
  username: "",
  userId: "",
  amount: 0
};

export const AuthProvider = props => {
  //If page refresh and user is logged in will not log out
  if (localStorage.user) {
    const loggedInUserData = JSON.parse(localStorage.user);
    defaultUserContext = loggedInUserData;
  }
  const [contextUser, setContextUser] = useState(defaultUserContext);

  return (
    <AuthContext.Provider value={[contextUser, setContextUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const initalUser = {
  isLoggedIn: false,
  username: "",
  userId: "",
  amount: 0
};
