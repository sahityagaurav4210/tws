module.exports = function (fastify, options, done) {
  fastify.register(require("./Login"), {
    prefix: "/login",
  });
  fastify.register(require("./Register"), {
    prefix: "/register",
  });

  done();
};
