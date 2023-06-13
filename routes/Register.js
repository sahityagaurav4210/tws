const Validation = require("../middlewares/Validations");
const Controller = require("../controllers");

const { accountLoginValidator } = Validation.login();
const { isUserExists } = Validation.register();
const { registerNewUser } = Controller.register();

module.exports = function (fastify, options, done) {
  fastify.post(
    "/",
    { preHandler: [accountLoginValidator, isUserExists] },
    registerNewUser
  );
  done();
};
