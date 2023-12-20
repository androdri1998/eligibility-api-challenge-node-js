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

const consumeClasses = {
  HOME: "residencial",
  INDUSTRY: "industrial",
  COMMERCIAL: "comercial",
  RURAL: "rural",
  PUBLIC: "poderPublico",
};
const classesDeConsumo = [
  consumeClasses.HOME,
  consumeClasses.INDUSTRY,
  consumeClasses.COMMERCIAL,
  consumeClasses.RURAL,
  consumeClasses.PUBLIC,
];

const tariffModalities = {
  BLUE: "azul",
  WHITE: "branca",
  GREEN: "verde",
  CONVENTIONAL: "convencional",
};
const modalidadesTarifarias = [
  tariffModalities.BLUE,
  tariffModalities.WHITE,
  tariffModalities.GREEN,
  tariffModalities.CONVENTIONAL,
];

module.exports = {
  cpf,
  cnpj,
  tiposDeConexao,
  classesDeConsumo,
  modalidadesTarifarias,
  consumeClasses,
  connectionTypes,
  tariffModalities,
};
