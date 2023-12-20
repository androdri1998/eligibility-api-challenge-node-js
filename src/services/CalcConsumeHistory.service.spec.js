const CalcConsumeHistoryService = require("./CalcConsumeHistory.service");

describe("CalcConsumeHistoryService test suit", () => {
  it(`should return average and total of history consume
  when execute method is called
  given an array of history consume`, () => {
    const mockHistoryConsume = [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ];
    const calcConsumeHistoryService = new CalcConsumeHistoryService();

    const result = calcConsumeHistoryService.execute(mockHistoryConsume);

    expect(result).toEqual({
      average: 100,
      total: 1200,
    });
  });
});
