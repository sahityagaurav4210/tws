const Validation = require("../middlewares/Validations");
const Controller = require("../controllers");

const { accountLoginValidator } = Validation.login();
const { registerNewUser } = Controller.register();

module.exports = function (fastify, options, done) {
  fastify.post("/", { preHandler: [accountLoginValidator] }, registerNewUser);
  done();
};
