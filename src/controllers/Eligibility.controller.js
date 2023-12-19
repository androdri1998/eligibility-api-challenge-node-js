const { reasonsReject } = require("../constants/reasons");
const {
  consumeClass,
  connectionTypes,
  tariffModality,
} = require("../constants/types");

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
    let average = sum / 12;
    if (tipoDeConexao === connectionTypes.SINGLE_PHASE && average < 400) {
      isEligible = false;
      reasons.push(reasonsReject.LOW_CONSUME_TO_CONNECTION_TYPE);
    }
    if (tipoDeConexao === connectionTypes.BIPHASIC && average < 500) {
      isEligible = false;
      reasons.push(reasonsReject.LOW_CONSUME_TO_CONNECTION_TYPE);
    }
    if (tipoDeConexao === connectionTypes.THREE_PHASE && average < 750) {
      isEligible = false;
      reasons.push(reasonsReject.LOW_CONSUME_TO_CONNECTION_TYPE);
    }

    if (!isEligible) {
      return reply.send({
        elegivel: isEligible,
        razoesDeInelegibilidade: reasons,
      });
    }

    const economy = (sum / 1000) * 84;

    reply.send({
      elegivel: isEligible,
      economiaAnualDeCO2: economy,
    });
  }
}

module.exports = EligibilityController;
