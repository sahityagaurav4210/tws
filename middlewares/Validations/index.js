const loginValidators = require("./login");
const registerValidations = require("./register");

class Validators {
  static login() {
    return loginValidators;
  }

  static register() {
    return registerValidations;
  }
}

module.exports = Validators;
