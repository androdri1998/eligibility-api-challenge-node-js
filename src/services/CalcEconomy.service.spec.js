const CalcEconomyService = require("./CalcEconomy.service");

describe("CalcEconomyService test suit", () => {
  it(`should return economy of CO2 based on history consume
  when execute method is called
  given a total of a sum`, () => {
    const mockTotal = 5000;
    const calcEconomyService = new CalcEconomyService();

    const result = calcEconomyService.execute(mockTotal);

    expect(result).toEqual(420);
  });
});
