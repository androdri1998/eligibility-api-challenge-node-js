const { reasonsReject } = require("../constants/reasons-reject.constants");
const {
  consumeClass,
  connectionTypes,
  tariffModality,
} = require("../constants/types.constants");

class EligibilityController {
  constructor() {
    this.check = this.check.bind(this);
  }

  check(request, reply) {
    const {
      classeDeConsumo,
      modalidadeTarifaria,
      historicoDeConsumo,
      tipoDeConexao,
    } = request.body;

    let isEligible = true;
    const reasons = [];
    if (
      ![
        consumeClass.HOME,
        consumeClass.INDUSTRY,
        consumeClass.COMMERCIAL,
      ].includes(classeDeConsumo)
    ) {
      isEligible = false;
      reasons.push(reasonsReject.CONSUME_CLASS_NOT_ACCEPT);
    }

    if (
      ![tariffModality.WHITE, tariffModality.CONVENTIONAL].includes(
        modalidadeTarifaria
      )
    ) {
      isEligible = false;
      reasons.push(reasonsReject.TARIFF_MODALITY_NOT_ACCEPT);
    }

    let sum = 0;
    for (let index = 0; index < historicoDeConsumo.length - 1; index++) {
      sum += historicoDeConsumo[index];
    }

    const MONTHS = 12;
    let average = sum / MONTHS;

    const MIN_CONSUME_TO_SINGLE_PHASE = 400;
    if (
      tipoDeConexao === connectionTypes.SINGLE_PHASE &&
      average < MIN_CONSUME_TO_SINGLE_PHASE
    ) {
      isEligible = false;
      reasons.push(reasonsReject.LOW_CONSUME_TO_CONNECTION_TYPE);
    }

    const MIN_CONSUME_TO_BIPHASIC = 500;
    if (
      tipoDeConexao === connectionTypes.BIPHASIC &&
      average < MIN_CONSUME_TO_BIPHASIC
    ) {
      isEligible = false;
      reasons.push(reasonsReject.LOW_CONSUME_TO_CONNECTION_TYPE);
    }

    const MIN_CONSUME_TO_THREE_PHASE = 750;
    if (
      tipoDeConexao === connectionTypes.THREE_PHASE &&
      average < MIN_CONSUME_TO_THREE_PHASE
    ) {
      isEligible = false;
      reasons.push(reasonsReject.LOW_CONSUME_TO_CONNECTION_TYPE);
    }

    if (!isEligible) {
      return reply.send({
        elegivel: isEligible,
        razoesDeInelegibilidade: reasons,
      });
    }

    const KILOWATTS = 1000;
    const AVERAGE_CO2 = 84;
    const economy = (sum / KILOWATTS) * AVERAGE_CO2;

    reply.send({
      elegivel: isEligible,
      economiaAnualDeCO2: economy,
    });
  }
}

module.exports = EligibilityController;
