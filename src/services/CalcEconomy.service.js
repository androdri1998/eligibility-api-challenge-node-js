class CalcEconomyService {
  constructor() {
    this.execute = this.execute.bind(this);
  }

  execute(sum) {
    const KILOWATTS = 1000;
    const AVERAGE_CO2 = 84;
    const economy = (sum / KILOWATTS) * AVERAGE_CO2;

    return economy;
  }
}

module.exports = CalcEconomyService;
