const { connectionTypes } = require("../constants/types.constants");

class ConnectionTypeHelper {
  constructor() {
    this.isEligibleConsumeToConnectionType =
      this.isEligibleConsumeToConnectionType.bind(this);
  }

  isEligibleConsumeToConnectionType(average, connectionType) {
    const MIN_CONSUME_TO_SINGLE_PHASE = 400;
    const MIN_CONSUME_TO_BIPHASIC = 500;
    const MIN_CONSUME_TO_THREE_PHASE = 750;

    const connectionTypesConsume = {
      [connectionTypes.SINGLE_PHASE]: MIN_CONSUME_TO_SINGLE_PHASE,
      [connectionTypes.BIPHASIC]: MIN_CONSUME_TO_BIPHASIC,
      [connectionTypes.THREE_PHASE]: MIN_CONSUME_TO_THREE_PHASE,
    };

    const minConsumeToConnectionType = connectionTypesConsume[connectionType];
    const isEligible =
      minConsumeToConnectionType && average >= minConsumeToConnectionType;

    return !!isEligible;
  }
}

module.exports = ConnectionTypeHelper;
