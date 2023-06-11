const accountLogin = Object.freeze({
  email: {
    "any.required": "Email is required",
    "string.base": "Email must be of valid type",
    "string.pattern.base": "Please enter valid email address",
  },
  password: {
    "any.custom":
      "Password must be atleast 8 characters long and alphanumeric and must contain atleast one special symbol. Only @,$ and # special characters are allowed.",
    "any.required": "Password is required",
    "string.base": "Password must be of valid type",
    "string.pattern.base": "Please enter valid password",
  },
});

module.exports = { accountLogin };
