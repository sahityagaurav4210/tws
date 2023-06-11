const loginValidators = require("./login");

class Validators {
  static login() {
    return loginValidators;
  }
}

module.exports = Validators;
