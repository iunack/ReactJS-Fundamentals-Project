const formValidator = {
  register(e, user, formAtributes, isTaken) {
    let value = e.target.value;
    let fieldName = e.target.name;
    //Username
    if (fieldName === "username") {
      if (value.length < 3) {
        return {
          ...formAtributes,
          isUsernameValid: "is-invalid",
          usernameValidationMessage: "Username must be at least 3 symbols!",
          usernameValidationFeedback: false
        };
      }
      if (isTaken) {
        return {
          ...formAtributes,
          isUsernameValid: "is-invalid",
          usernameValidationMessage: "Username is already taken!",
          usernameValidationFeedback: false
        };
      }
      return {
        ...formAtributes,
        isUsernameValid: "is-valid",
        usernameValidationMessage: "You got the power!",
        usernameValidationFeedback: true
      };
    }
    //Password
    if (fieldName === "password") {
      if (value.length < 4) {
        return {
          ...formAtributes,
          isPasswordValid: "is-invalid",
          passwordValidationMessage: "Password must be at least 4 symbols!",
          passwordValidationFeedback: false
        };
      }
      if (value !== user.rePassword && user.rePassword !== "") {
        return {
          ...formAtributes,
          isRePasswordValid: "is-invalid",
          rePasswordValidationMessage:
            "Password and confirm password don't match!",
          rePasswordValidationFeedback: false
        };
      }
      if (value === user.rePassword && user.rePassword !== "") {
        return {
          ...formAtributes,
          isPasswordValid: "is-valid",
          passwordValidationMessage: "You got the power!",
          passwordValidationFeedback: true,
          isRePasswordValid: "is-valid",
          rePasswordValidationMessage: "You got the power!",
          rePasswordValidationFeedback: true
        };
      }

      return {
        ...formAtributes,
        isPasswordValid: "is-valid",
        passwordValidationMessage: "You got the power!",
        passwordValidationFeedback: true
      };
    }
    //Confirm password
    if (fieldName === "rePassword") {
      if (value !== user.password) {
        return {
          ...formAtributes,
          isRePasswordValid: "is-invalid",
          rePasswordValidationMessage:
            "Password and confirm password don't match!",
          rePasswordValidationFeedback: false
        };
      }

      return {
        ...formAtributes,
        isRePasswordValid: "is-valid",
        rePasswordValidationMessage: "You got the power!",
        rePasswordValidationFeedback: true
      };
    }
  },
  login(e, user, formAtributes) {
    let value = e.target.value;
    let fieldName = e.target.name;
    //Username
    if (fieldName === "username") {
      if (value.length < 3) {
        return {
          ...formAtributes,
          isUsernameValid: "is-invalid",
          usernameValidationMessage: "Username must be at least 3 symbols!",
          usernameValidationFeedback: false
        };
      }
      return {
        ...formAtributes,
        isUsernameValid: "is-valid",
        usernameValidationMessage: "You got the power!",
        usernameValidationFeedback: true
      };
    }
    //Password
    if (fieldName === "password") {
      if (value.length < 4) {
        return {
          ...formAtributes,
          isPasswordValid: "is-invalid",
          passwordValidationMessage: "Password must be at least 4 symbols!",
          passwordValidationFeedback: false
        };
      }
      return {
        ...formAtributes,
        isPasswordValid: "is-valid",
        passwordValidationMessage: "You got the power!",
        passwordValidationFeedback: true
      };
    }
  }
};

export default formValidator;
