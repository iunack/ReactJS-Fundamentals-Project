const validateUserRegister = (user, formAtributes) => {

    const { username, password } = user;
    let isValid = true;
    let result = {};

    if (username.length < 3) {
      result = {
        ...result,
        ...formAtributes,
        isUsernameValid: "is-invalid",
        usernameValidationMessage: "Username must be at least 3 symbols!",
        usernameValidationFeedback: false
      };
      isValid = false;
    }

    //Password
    if (password.length < 4) {
      result = {
        ...formAtributes,
        isPasswordValid: "is-invalid",
        passwordValidationMessage: "Password must be at least 4 symbols!",
        passwordValidationFeedback: false,
        ...result
      };
      isValid = false;
    }

    return { isValid, result };

}
export default validateUserRegister;
