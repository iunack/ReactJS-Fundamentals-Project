import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Badge
} from "reactstrap";
import formValidator from "../../../services/form-validator";
import validateUserRegister from "../../../services/validateUserRegister";

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

  const handleSumbit = event => {
    event.preventDefault();
    const atributes = validateUserRegister(user, formAtributes);
    if (!atributes.isValid) {
      setAtributes(atributes.result);

      return;
    }
    console.log(props);
    
    props.history.push("/login");
  };

  const handleChange = event => {
    user[event.target.name] = event.target.value;
    setUser(user);
    let atributes = formValidator.register(event, user, formAtributes);

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
