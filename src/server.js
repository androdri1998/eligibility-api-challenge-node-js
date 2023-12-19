const Fastify = require("fastify");
const { eligibilitySchema } = require("./schemas/eligibility.schema");
const EligibilityController = require("./controllers/Eligibility.controller");

const server = Fastify({
  logger: true,
});

const eligibilityController = new EligibilityController();

server.post(
  "/check/eligibility",
  { schema: eligibilitySchema },
  eligibilityController.check
);

module.exports = server;
