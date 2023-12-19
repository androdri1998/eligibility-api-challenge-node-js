const cpf = {
  type: "string",
  pattern: "^\\d{11}$",
};

const cnpj = {
  type: "string",
  pattern: "^\\d{14}$",
};

const connectionTypes = {
  SINGLE_PHASE: "monofasico",
  BIPHASIC: "bifasico",
  THREE_PHASE: "trifasico",
};
const tiposDeConexao = [
  connectionTypes.SINGLE_PHASE,
  connectionTypes.BIPHASIC,
  connectionTypes.THREE_PHASE,
];

const consumeClass = {
  HOME: "residencial",
  INDUSTRY: "industrial",
  COMMERCIAL: "comercial",
  RURAL: "rural",
  PUBLIC: "poderPublico",
};
const classesDeConsumo = [
  consumeClass.HOME,
  consumeClass.INDUSTRY,
  consumeClass.COMMERCIAL,
  consumeClass.RURAL,
  consumeClass.PUBLIC,
];

const tariffModality = {
  BLUE: "azul",
  WHITE: "branca",
  GREEN: "verde",
  CONVENTIONAL: "convencional",
};
const modalidadesTarifarias = [
  tariffModality.BLUE,
  tariffModality.WHITE,
  tariffModality.GREEN,
  tariffModality.CONVENTIONAL,
];

module.exports = {
  cpf,
  cnpj,
  tiposDeConexao,
  classesDeConsumo,
  modalidadesTarifarias,
  consumeClass,
  connectionTypes,
  tariffModality,
};
