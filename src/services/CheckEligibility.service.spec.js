const CheckEligibilityService = require("./CheckEligibility.service");
const ConnectionTypeHelper = require("../helpers/ConnectionType.helper");
const ConsumeClassHelper = require("../helpers/ConsumeClass.helper");
const TariffModalityHelper = require("../helpers/TariffModality.helper");
const CalcEconomyService = require("./CalcEconomy.service");
const CalcConsumeHistoryService = require("./CalcConsumeHistory.service");
const {
  connectionTypes,
  consumeClasses,
  tariffModalities,
} = require("../constants/types.constants");
const config = require("../config");
const { reasonsReject } = require("../constants/reasons-reject.constants");

describe("CheckEligibilityService test suit", () => {
  it(`should return with success response
  when execute method is called
  given consumeClass, tariffModality, consumeHistory and connectionType 
  that satisfies conditions`, () => {
    const mockParameters = {
      document: config.tests.mockDocument,
      connectionType: connectionTypes.BIPHASIC,
      consumeClass: consumeClasses.COMMERCIAL,
      tariffModality: tariffModalities.CONVENTIONAL,
      consumeHistory: [
        1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      ],
    };

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

    const result = checkEligibilityService.execute({
      connectionType: mockParameters.connectionType,
      consumeClass: mockParameters.consumeClass,
      consumeHistory: mockParameters.consumeHistory,
      tariffModality: mockParameters.tariffModality,
    });

    expect(result).toEqual({
      elegivel: true,
      economiaAnualDeCO2: 1008,
    });
  });

  it(`should return with fail response
  when execute method is called
  given consumeClass, tariffModality, consumeHistory and connectionType 
  that not satisfies conditions`, () => {
    const mockParameters = {
      document: config.tests.mockDocument,
      connectionType: connectionTypes.BIPHASIC,
      consumeClass: consumeClasses.RURAL,
      tariffModality: tariffModalities.GREEN,
      consumeHistory: [
        1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      ],
    };

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

    const result = checkEligibilityService.execute({
      connectionType: mockParameters.connectionType,
      consumeClass: mockParameters.consumeClass,
      consumeHistory: mockParameters.consumeHistory,
      tariffModality: mockParameters.tariffModality,
    });

    expect(result).toEqual({
      elegivel: false,
      razoesDeInelegibilidade: [
        reasonsReject.CONSUME_CLASS_NOT_ACCEPT,
        reasonsReject.TARIFF_MODALITY_NOT_ACCEPT,
      ],
    });
  });

  it(`should return with a fail response
  when execute method is called
  given consumeClass not satisfies conditions`, () => {
    const mockParameters = {
      document: config.tests.mockDocument,
      connectionType: connectionTypes.BIPHASIC,
      consumeClass: consumeClasses.RURAL,
      tariffModality: tariffModalities.CONVENTIONAL,
      consumeHistory: [
        1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      ],
    };

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

    const result = checkEligibilityService.execute({
      connectionType: mockParameters.connectionType,
      consumeClass: mockParameters.consumeClass,
      consumeHistory: mockParameters.consumeHistory,
      tariffModality: mockParameters.tariffModality,
    });

    expect(result).toEqual({
      elegivel: false,
      razoesDeInelegibilidade: [reasonsReject.CONSUME_CLASS_NOT_ACCEPT],
    });
  });

  it(`should return with a fail response
  when execute method is called
  given tariffModality not satisfies conditions`, () => {
    const mockParameters = {
      document: config.tests.mockDocument,
      connectionType: connectionTypes.BIPHASIC,
      consumeClass: consumeClasses.HOME,
      tariffModality: tariffModalities.BLUE,
      consumeHistory: [
        1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      ],
    };

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

    const result = checkEligibilityService.execute({
      connectionType: mockParameters.connectionType,
      consumeClass: mockParameters.consumeClass,
      consumeHistory: mockParameters.consumeHistory,
      tariffModality: mockParameters.tariffModality,
    });

    expect(result).toEqual({
      elegivel: false,
      razoesDeInelegibilidade: [reasonsReject.TARIFF_MODALITY_NOT_ACCEPT],
    });
  });

  it(`should return with a fail response
  when execute method is called
  given consumeHistory and connectionType 
  not satisfies conditions`, () => {
    const mockParameters = {
      document: config.tests.mockDocument,
      connectionType: connectionTypes.BIPHASIC,
      consumeClass: consumeClasses.HOME,
      tariffModality: tariffModalities.CONVENTIONAL,
      consumeHistory: [
        499, 499, 499, 499, 499, 499, 499, 499, 499, 499, 499, 499,
      ],
    };

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

    const result = checkEligibilityService.execute({
      connectionType: mockParameters.connectionType,
      consumeClass: mockParameters.consumeClass,
      consumeHistory: mockParameters.consumeHistory,
      tariffModality: mockParameters.tariffModality,
    });

    expect(result).toEqual({
      elegivel: false,
      razoesDeInelegibilidade: [reasonsReject.LOW_CONSUME_TO_CONNECTION_TYPE],
    });
  });
});
