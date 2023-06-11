const bcyrpt = require("bcrypt");
const db = require("../db/models");
const Login = require("../db/models/login")(
  db.sequelize,
  db.Sequelize.DataTypes
);
const jwt = require("jsonwebtoken");

const HTTP = require("../helpers/messages").HttpMessages;

const { SECKEY, REFSECKEY, TIMEOUT } = process.env;
const timeout = TIMEOUT || "1m";

const accountLogin = async function (request, reply) {
  try {
    const { email, password } = request.body;
    let accessToken, refreshToken;

    const found = await Login.findOne({
      where: {
        email,
      },
    });

    if (found && bcyrpt.compareSync(password, found.password)) {
      accessToken = jwt.sign({ email }, SECKEY, { expiresIn: timeout });
      refreshToken = jwt.sign({ email }, REFSECKEY, { expiresIn: "1d" });

      return reply.code(HTTP.OK).send({
        message: "Login Successful",
        email,
        accessToken,
        refreshToken,
      });
    } else {
      return reply.code(HTTP.UNAUTHORISED).send({
        message: "Invalid Payload",
        error: "Invalid username or password",
      });
    }
  } catch (error) {
    return reply.code(HTTP.ERROR).send({
      message: "An error occured",
      error: error.message,
    });
  }
};

module.exports = { accountLogin };
