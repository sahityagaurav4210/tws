const db = require("../../db/models");
const Login = require("../../db/models/login")(
  db.sequelize,
  db.Sequelize.DataTypes
);

const HTTP = require("../../helpers/messages/index").HttpMessages;

const isUserExists = async (request, reply) => {
  try {
    const { email } = request.body;
    if (await Login.findOne({ where: { email } })) {
      return reply.code(HTTP.BADREQ).send({
        message: "Invalid Payload",
        error: "This email already exists",
      });
    }
    return;
  } catch (error) {
    return reply.code(HTTP.ERROR).send({
      message: "An error occured",
      error: error.message,
    });
  }
};

module.exports = { isUserExists };
