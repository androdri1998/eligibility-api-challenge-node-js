require("dotenv").config();
const config = require("./src/config");
const server = require("./src/server");

server.listen({ port: config.port, host: config.host }, (err, _address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
