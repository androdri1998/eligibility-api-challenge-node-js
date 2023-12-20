const Fastify = require("fastify");
const { eligibilitySchema } = require("./schemas/eligibility.schema");
const EligibilityController = require("./controllers/Eligibility.controller");
const CheckEligibilityService = require("./services/CheckEligibility.service");
const ConnectionTypeHelper = require("./helpers/ConnectionType.helper");

const server = Fastify({
  logger: true,
});

const connectionTypeHelper = new ConnectionTypeHelper();
const checkEligibilityService = new CheckEligibilityService({
  connectionTypeHelper,
});
const eligibilityController = new EligibilityController({
  checkEligibilityService,
});

server.post(
  "/check/eligibility",
  { schema: eligibilitySchema },
  eligibilityController.check
);

module.exports = server;
