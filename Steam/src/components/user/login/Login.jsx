import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/ContextWrapper";
import formValidator from "../../../utils/form-validator";
import validateUserLogin from "../../../utils/validateUserLogin";
import userService from "../../../services/user-service";
import notify from "../../../services/notify";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Badge
} from "reactstrap";

const Login = props => {
  const {
    setUsername,
    setIsLoggedIn,
    setUserId,
    setAmount,
    setDlGames,
    setUplGames
  } = useContext(AuthContext);

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  //Form atributes Initial state
  const [formAtributes, setAtributes] = useState({
    isValid: false,
    isUsernameValid: null,
    usernameValidationFeedback: null,
    usernameValidationMessage: "",
    isPassValid: null,
    passValidationFeedback: null,
    passValidationMessage: ""
  });

  const handleSumbit = event => {
    event.preventDefault();
    const atributes = validateUserLogin(user, formAtributes);
    if (!atributes.isValid) {
      setAtributes(atributes.result);
      return;
    }

    userService
      .login(user)
      .then(res => {
        console.log(res.data);

        const loggedInUserData = {
          isLoggedIn: true,
          username: res.data.user.username,
          userId: res.data.user._id,
          amount: res.data.user.amount,
          uplGames: res.data.user.upGames,
          dlGames: res.data.user.downGames
        };

        setContextUser(loggedInUserData);
        notify.success(res.data.message);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        notify.error("Wrong username or password!");
      });
  };

  const setContextUser = (loggedInUserData) =>{
      setIsLoggedIn(true);
      setUsername(loggedInUserData.username);
      setUserId(loggedInUserData.userId);
      setAmount(loggedInUserData.amount);
      setUplGames(loggedInUserData.uplGames);
      setDlGames(loggedInUserData.dlGames);
  }

  const handleChange = event => {
    user[event.target.name] = event.target.value;
    setUser(user);
    let atributes = formValidator.login(event, user, formAtributes);
    setAtributes(atributes);
  };

  return (
    <Form onSubmit={handleSumbit}>
      <h1 className="steam-h1">
        {" "}
        <Badge color="secondary">Login</Badge>
      </h1>
      <FormGroup>
        <Label for="profileUsername">Username</Label>
        <Input
          type="text"
          name="username"
          id="profileUsername"
          placeholder="Enter your username"
          value={user.username}
          className={formAtributes["isUsernameValid"]}
          onChange={handleChange}
        />
        <FormFeedback
          id="steam-formfeedback"
          valid={formAtributes["usernameValidationFeedback"]}
        >
          {formAtributes["usernameValidationMessage"]}
        </FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Enter your password"
          value={user.password}
          className={formAtributes["isPasswordValid"]}
          onChange={handleChange}
        />
        <FormFeedback
          id="steam-formfeedback"
          valid={formAtributes["passwordValidationFeedback"]}
        >
          {formAtributes["passwordValidationMessage"]}
        </FormFeedback>
      </FormGroup>
      <Button color="primary">Login</Button>
      <div>
        Have no account in Steam? <Link to="/register">Register</Link>
      </div>
    </Form>
  );
};

export default Login;
