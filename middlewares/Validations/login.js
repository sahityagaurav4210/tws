const joi = require("joi");

const Patterns = require("../../helpers/patterns/index");
const HTTP = require("../../helpers/messages").HttpMessages;
const ValidationMessages = require("../../helpers/messages").ValidationMessages;

const passwordPattern = [
  new RegExp(/([A-Z]+)/),
  new RegExp(/([0-9]+)/),
  new RegExp(/(\@|\$|\#)/),
];
const { accountLogin } = ValidationMessages.login();

const isValidPassword = function (password, helpers) {
  for (let i = 0; i < passwordPattern.length; i++) {
    if (passwordPattern[i].test(password)) continue;
    else {
      throw new Error(false);
    }
  }
  return true;
};

const accountLoginValidator = function (request, reply, next) {
  const data = {
    email: request?.body?.email,
    password: request?.body?.password,
  };

  const schema = joi.object({
    email: joi
      .string()
      .regex(Patterns.email)
      .required()
      .messages(accountLogin.email),
    password: joi
      .string()
      .regex(Patterns.password)
      .custom(isValidPassword)
      .required()
      .messages(accountLogin.password),
  });

  const result = schema.validate(data);

  if (!result.error) next();
  else {
    return reply.code(HTTP.FAILED).send({
      message: "Invalid Payload",
      error: result.error.details[0].message,
    });
  }
};

module.exports = { accountLoginValidator };
