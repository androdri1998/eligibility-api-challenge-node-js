class EligibilityController {
  constructor({ checkEligibilityService }) {
    this.checkEligibilityService = checkEligibilityService;

    this.check = this.check.bind(this);
  }

  check(request, reply) {
    const {
      classeDeConsumo,
      modalidadeTarifaria,
      historicoDeConsumo,
      tipoDeConexao,
    } = request.body;

    const result = this.checkEligibilityService.execute({
      consumeClass: classeDeConsumo,
      tariffModality: modalidadeTarifaria,
      consumeHistory: historicoDeConsumo,
      connectionType: tipoDeConexao,
    });

    return reply.send(result);
  }
}

module.exports = EligibilityController;
