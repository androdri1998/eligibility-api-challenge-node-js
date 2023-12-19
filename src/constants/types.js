const cpf = {
  type: "string",
  pattern: "^\\d{11}$",
};

const cnpj = {
  type: "string",
  pattern: "^\\d{14}$",
};

const tiposDeConexao = ["monofasico", "bifasico", "trifasico"];

const classesDeConsumo = [
  "residencial",
  "industrial",
  "comercial",
  "rural",
  "poderPublico",
];

const modalidadesTarifarias = ["azul", "branca", "verde", "convencional"];

module.exports = {
  cpf,
  cnpj,
  tiposDeConexao,
  classesDeConsumo,
  modalidadesTarifarias,
};
