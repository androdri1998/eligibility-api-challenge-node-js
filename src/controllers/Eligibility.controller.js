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
    if (!["residencial", "industrial", "comercial"].includes(classeDeConsumo)) {
      isEligible = false;
      reasons.push("Classe de consumo não aceita");
    }

    if (!["branca", "convencional"].includes(modalidadeTarifaria)) {
      isEligible = false;
      reasons.push("Modalidade tarifária não aceita");
    }

    let sum = 0;
    for (let index = 0; index < historicoDeConsumo.length - 1; index++) {
      sum += historicoDeConsumo[index];
    }
    let average = sum / 12;
    if (tipoDeConexao === "monofasico" && average < 400) {
      isEligible = false;
      reasons.push("Consumo muito baixo para tipo de conexão");
    }
    if (tipoDeConexao === "bifasico" && average < 500) {
      isEligible = false;
      reasons.push("Consumo muito baixo para tipo de conexão");
    }
    if (tipoDeConexao === "trifasico" && average < 750) {
      isEligible = false;
      reasons.push("Consumo muito baixo para tipo de conexão");
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
