const loginValidationMsgs = require("./Login");

class ValidationMessages {
  static login() {
    return loginValidationMsgs;
  }
}

class HttpMessages {
  static get OK() {
    return 200;
  }

  static get CREATED() {
    return 201;
  }

  static get BADREQ() {
    return 400;
  }

  static get UNAUTHORISED() {
    return 401;
  }

  static get NOTFOUND() {
    return 404;
  }

  static get FAILED() {
    return 412;
  }

  static get ERROR() {
    return 500;
  }
}

module.exports = { ValidationMessages, HttpMessages };
