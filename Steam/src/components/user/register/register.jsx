import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Badge
} from "reactstrap";
import formValidator from "../../../utils/form-validator";
import validateUserRegister from "../../../utils/validateUserRegister";
import userService from "../../../services/user-service";
import notify from "../../../services/notify";


const Register = props => {
  //user Initial state
  const [user, setUser] = useState({
    username: "",
    password: "",
    rePassword: ""
  });

  //Form atributes Initial state
  const [formAtributes, setAtributes] = useState({
    isValid: false,
    isUsernameValid: null,
    usernameValidationFeedback: null,
    usernameValidationMessage: "",
    isPassValid: null,
    passValidationFeedback: null,
    passValidationMessage: "",
    isRePassValid: null,
    rePassValidationFeedback: null,
    rePassValidationMessage: ""
  });

  const [data, setData] = useState({});

  const handleSumbit = async event => {
    event.preventDefault();
    const atributes = validateUserRegister(user, formAtributes);
    if (!atributes.isValid) {
      setAtributes(atributes.result);
      return;
    }

    userService
      .register({
        username: user.username,
        password: user.password
      })
      .then(serverResponse => {
        notify.success(serverResponse.data.message);
        props.history.push("/login");
      })
      .catch(err => {
        notify.error(err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await userService.getAll();
      setData(result.data);
    };

    fetchData();
  }, [setData]);

  const handleChange = event => {
    user[event.target.name] = event.target.value;
    setUser(user);

    const isTaken = data.map(x => x.username).indexOf(user.username) !== -1;
    let atributes = formValidator.register(event, user, formAtributes, isTaken);
    setAtributes(atributes);
  };

  return (
    <Form onSubmit={handleSumbit}>
      <h1 className="steam-h1">
        {" "}
        <Badge color="secondary">Register</Badge>
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
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
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
      <FormGroup>
        <Label for="rePassword">Confirm Password</Label>
        <Input
          type="password"
          name="rePassword"
          id="rePassword"
          placeholder="Confirm your password"
          value={user.rePassword}
          className={formAtributes["isRePasswordValid"]}
          onChange={handleChange}
        />
        <FormFeedback
          id="steam-formfeedback"
          valid={formAtributes["rePasswordValidationFeedback"]}
        >
          {formAtributes["rePasswordValidationMessage"]}
        </FormFeedback>
      </FormGroup>
      <Button color="success">Register</Button>
    </Form>
  );
};

export default Register;
