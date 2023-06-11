const fastify = require("fastify")();
require("dotenv/config");

const routes = require("../routes");

const { PORT, SERVHOST } = process.env;
const host = SERVHOST || "127.0.0.1";

fastify.register(routes, {
  prefix: "/",
});

class Server {
  start = async function () {
    return fastify.listen({
      port: PORT,
      host
    });
  };
}

module.exports = Server;
