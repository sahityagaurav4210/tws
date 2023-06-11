const loginControllers = require("./Login");
const registerControllers = require("./Register");

class Controller {
  static login() {
    return loginControllers;
  }

  static register() {
    return registerControllers;
  }
}

module.exports = Controller;
