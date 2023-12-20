class CalcConsumeHistoryService {
  constructor() {
    this.execute = this.execute.bind(this);
  }

  execute(consumeHistory) {
    let total = 0;
    for (let index = 0; index < consumeHistory.length; index++) {
      total += consumeHistory[index];
    }

    const MONTHS = consumeHistory.length;
    let average = total / MONTHS;

    return { average, total };
  }
}

module.exports = CalcConsumeHistoryService;
