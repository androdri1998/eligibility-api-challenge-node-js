const { tariffModalities } = require("../constants/types.constants");

class TariffModalityHelper {
  constructor() {
    this.isValidTariffModality = this.isValidTariffModality.bind(this);
  }

  isValidTariffModality(tariffModality) {
    const validTariffModalities = {
      [tariffModalities.WHITE]: true,
      [tariffModalities.CONVENTIONAL]: true,
    };

    const validTariffModality = validTariffModalities[tariffModality];

    return !!validTariffModality;
  }
}

module.exports = TariffModalityHelper;
