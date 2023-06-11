const bcrypt = require("bcrypt");

const db = require("../db/models");
const Login = require("../db/models/login")(
  db.sequelize,
  db.Sequelize.DataTypes
);
const HTTP = require("../helpers/messages").HttpMessages;

const ROUNDS = parseInt(process.env.ROUNDS) || 10;
const salt = bcrypt.genSaltSync(ROUNDS);

const registerNewUser = async function (request, reply) {
  try {
    request.body.password = bcrypt.hashSync(request.body.password, salt);

    const login = await Login.create(request.body);
    return reply.code(HTTP.CREATED).send({
      message: "Registeration successful",
      email: login.dataValues.email,
    });
  } catch (error) {
    return reply.code(HTTP.ERROR).send({
      message: "An error occured",
      error: error.message,
    });
  }
};

module.exports = { registerNewUser };
