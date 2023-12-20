const { consumeClasses } = require("../constants/types.constants");

class ConsumeClassHelper {
  constructor() {
    this.isValidConsumeClass = this.isValidConsumeClass.bind(this);
  }

  isValidConsumeClass(consumeClass) {
    const validConsumeClasses = {
      [consumeClasses.HOME]: true,
      [consumeClasses.INDUSTRY]: true,
      [consumeClasses.COMMERCIAL]: true,
    };

    const validConsumeClass = validConsumeClasses[consumeClass];

    return !!validConsumeClass;
  }
}

module.exports = ConsumeClassHelper;
