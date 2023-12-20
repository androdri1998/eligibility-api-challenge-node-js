const Fastify = require("fastify");

const { eligibilitySchema } = require("./schemas/eligibility.schema");
const EligibilityController = require("./controllers/Eligibility.controller");
const CheckEligibilityService = require("./services/CheckEligibility.service");
const ConnectionTypeHelper = require("./helpers/ConnectionType.helper");
const ConsumeClassHelper = require("./helpers/ConsumeClass.helper");
const TariffModalityHelper = require("./helpers/TariffModality.helper");
const CalcEconomyService = require("./services/CalcEconomy.service");
const CalcConsumeHistoryService = require("./services/CalcConsumeHistory.service");

const server = Fastify({
  logger: true,
});

const tariffModalityHelper = new TariffModalityHelper();
const consumeClassHelper = new ConsumeClassHelper();
const connectionTypeHelper = new ConnectionTypeHelper();

const calcConsumeHistoryService = new CalcConsumeHistoryService();
const calcEconomyService = new CalcEconomyService();
const checkEligibilityService = new CheckEligibilityService({
  connectionTypeHelper,
  consumeClassHelper,
  tariffModalityHelper,
  calcConsumeHistoryService,
  calcEconomyService,
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
