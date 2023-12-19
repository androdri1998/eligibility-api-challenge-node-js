const server = require("./src/server");

server.listen({ port: 3000, host: "127.0.0.1" }, (err, _address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
