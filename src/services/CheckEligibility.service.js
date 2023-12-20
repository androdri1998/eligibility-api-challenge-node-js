const { reasonsReject } = require("../constants/reasons-reject.constants");

class CheckEligibilityService {
  constructor({
    connectionTypeHelper,
    consumeClassHelper,
    tariffModalityHelper,
    calcConsumeHistoryService,
    calcEconomyService,
  }) {
    this.connectionTypeHelper = connectionTypeHelper;
    this.consumeClassHelper = consumeClassHelper;
    this.tariffModalityHelper = tariffModalityHelper;
    this.calcConsumeHistoryService = calcConsumeHistoryService;
    this.calcEconomyService = calcEconomyService;

    this.execute = this.execute.bind(this);
  }

  execute({ consumeClass, tariffModality, consumeHistory, connectionType }) {
    let isEligible = true;
    const reasons = [];

    if (!this.consumeClassHelper.isValidConsumeClass(consumeClass)) {
      isEligible = false;
      reasons.push(reasonsReject.CONSUME_CLASS_NOT_ACCEPT);
    }

    if (!this.tariffModalityHelper.isValidTariffModality(tariffModality)) {
      isEligible = false;
      reasons.push(reasonsReject.TARIFF_MODALITY_NOT_ACCEPT);
    }

    let { average, total } =
      this.calcConsumeHistoryService.execute(consumeHistory);
    if (
      !this.connectionTypeHelper.isEligibleConsumeToConnectionType(
        average,
        connectionType
      )
    ) {
      isEligible = false;
      reasons.push(reasonsReject.LOW_CONSUME_TO_CONNECTION_TYPE);
    }

    if (!isEligible) {
      return {
        elegivel: isEligible,
        razoesDeInelegibilidade: reasons,
      };
    }

    const economy = this.calcEconomyService.execute(total);
    return {
      elegivel: isEligible,
      economiaAnualDeCO2: economy,
    };
  }
}

module.exports = CheckEligibilityService;
