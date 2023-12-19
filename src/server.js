const Fastify = require("fastify");
const { validationSchema } = require("./schemas/validation.schema");
const EligibilityController = require("./controllers/Eligibility.controller");

const server = Fastify({
  logger: true,
});

const eligibilityController = new EligibilityController();

server.post(
  "/check/eligibility",
  { schema: validationSchema },
  eligibilityController.check
);

module.exports = server;
