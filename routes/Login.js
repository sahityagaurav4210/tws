const Controller = require("../controllers");
const Validators = require("../middlewares/Validations");

const { accountLogin } = Controller.login();
const { accountLoginValidator } = Validators.login();

module.exports = function (fastify, options, done) {
  fastify.post("/", { preHandler: [accountLoginValidator] }, accountLogin);
  done();
};
