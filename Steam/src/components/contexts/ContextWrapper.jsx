import React, { useState, useEffect, createContext } from "react";
import userService from "../../services/user-service";

export const defaultUserContext = {
  isLoggedIn: false,
  username: "",
  userId: "",
  amount: 0,
  dlGames: null,
  uplGames: null
};

export const AuthContext = createContext(defaultUserContext);

export const AuthProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(0);
  const [dlGames, setDlGames] = useState(null);
  const [uplGames, setUplGames] = useState(null);

  //If page refresh and user is logged in will not log out
  useEffect(() => {
      userService
      .auth()
      .then(res => {
        console.log(res.data);
        setIsLoggedIn(true);
        setUsername(res.data.username);
        setUserId(res.data._id);
        setAmount(res.data.amount);
        setUplGames(res.data.upgames);
        setDlGames(res.data.downgames);
      })
      .catch(err => console.log(err));

  }, []);

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        isLoggedIn,
        setIsLoggedIn,
        userId,
        setUserId,
        amount,
        setAmount,
        dlGames,
        setDlGames,
        uplGames,
        setUplGames
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
