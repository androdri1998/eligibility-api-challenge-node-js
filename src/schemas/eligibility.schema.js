const { reasonsReject } = require("../constants/reasons");
const {
  tiposDeConexao,
  classesDeConsumo,
  modalidadesTarifarias,
  cpf,
  cnpj,
} = require("../constants/types");

const enumOf = (values) => ({
  type: typeof values[0],
  enum: values,
});

const input = {
  type: "object",
  additionalProperties: false,
  required: [
    "numeroDoDocumento",
    "tipoDeConexao",
    "classeDeConsumo",
    "modalidadeTarifaria",
    "historicoDeConsumo",
  ],
  properties: {
    numeroDoDocumento: { oneOf: [cpf, cnpj] },
    tipoDeConexao: enumOf(tiposDeConexao),
    classeDeConsumo: enumOf(classesDeConsumo),
    modalidadeTarifaria: enumOf(modalidadesTarifarias),
    historicoDeConsumo: {
      // em kWh
      type: "array",
      minItems: 3,
      maxItems: 12,
      items: {
        type: "integer",
        minimum: 0,
        maximum: 9999,
      },
    },
  },
};

const output = {
  oneOf: [
    {
      type: "object",
      additionalProperties: false,
      required: ["elegivel", "economiaAnualDeCO2"],
      properties: {
        elegivel: enumOf([true]), // always true
        economiaAnualDeCO2: { type: "number", minimum: 0 },
      },
    },
    {
      type: "object",
      additionalProperties: false,
      required: ["elegivel", "razoesDeInelegibilidade"],
      properties: {
        elegivel: enumOf([false]), // always false
        razoesDeInelegibilidade: {
          type: "array",
          uniqueItems: true,
          items: {
            type: "string",
            enum: [
              reasonsReject.CONSUME_CLASS_NOT_ACCEPT,
              reasonsReject.TARIFF_MODALITY_NOT_ACCEPT,
              reasonsReject.LOW_CONSUME_TO_CONNECTION_TYPE,
            ],
          },
        },
      },
    },
  ],
};

const eligibilitySchema = {
  body: input,
  response: {
    200: output,
  },
};

module.exports = {
  eligibilitySchema,
};
