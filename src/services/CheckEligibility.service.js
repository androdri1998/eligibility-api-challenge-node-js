const { reasonsReject } = require("../constants/reasons-reject.constants");
const {
  consumeClasses,
  tariffModalities,
} = require("../constants/types.constants");

class CheckEligibilityService {
  constructor({ connectionTypeHelper }) {
    this.connectionTypeHelper = connectionTypeHelper;

    this.execute = this.execute.bind(this);
  }

  execute({ consumeClass, tariffModality, consumeHistory, connectionType }) {
    let isEligible = true;
    const reasons = [];
    if (
      ![
        consumeClasses.HOME,
        consumeClasses.INDUSTRY,
        consumeClasses.COMMERCIAL,
      ].includes(consumeClass)
    ) {
      isEligible = false;
      reasons.push(reasonsReject.CONSUME_CLASS_NOT_ACCEPT);
    }

    if (
      ![tariffModalities.WHITE, tariffModalities.CONVENTIONAL].includes(
        tariffModality
      )
    ) {
      isEligible = false;
      reasons.push(reasonsReject.TARIFF_MODALITY_NOT_ACCEPT);
    }

    let sum = 0;
    for (let index = 0; index < consumeHistory.length - 1; index++) {
      sum += consumeHistory[index];
    }

    const MONTHS = consumeHistory.length;
    let average = sum / MONTHS;

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

    const KILOWATTS = 1000;
    const AVERAGE_CO2 = 84;
    const economy = (sum / KILOWATTS) * AVERAGE_CO2;

    return {
      elegivel: isEligible,
      economiaAnualDeCO2: economy,
    };
  }
}

module.exports = CheckEligibilityService;
