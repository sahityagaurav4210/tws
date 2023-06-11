const Server = require("./server");

const server = new Server();

const bootup = async function () {
  const url = await server.start();

  console.info(`Server is up and running at ${url}`);
};

bootup();
