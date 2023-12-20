const { connectionTypes } = require("../constants/types.constants");
const ConnectionTypeHelper = require("./ConnectionType.helper");

describe("ConnectionTypeHelper suit test", () => {
  it(`should return true
  when average it's enough for single phase
  given average and connectionType`, () => {
    const mockAverage = 400;
    const mockConnectionType = connectionTypes.SINGLE_PHASE;

    const connectionTypeHelper = new ConnectionTypeHelper();

    const result = connectionTypeHelper.isEligibleConsumeToConnectionType(
      mockAverage,
      mockConnectionType
    );

    expect(result).toBe(true);
  });

  it(`should return false
  when average it's not enough for single phase
  given average and connectionType`, () => {
    const mockAverage = 399;
    const mockConnectionType = connectionTypes.SINGLE_PHASE;

    const connectionTypeHelper = new ConnectionTypeHelper();

    const result = connectionTypeHelper.isEligibleConsumeToConnectionType(
      mockAverage,
      mockConnectionType
    );

    expect(result).toBe(false);
  });

  it(`should return true
  when average it's enough for biphasic
  given average and connectionType`, () => {
    const mockAverage = 500;
    const mockConnectionType = connectionTypes.BIPHASIC;

    const connectionTypeHelper = new ConnectionTypeHelper();

    const result = connectionTypeHelper.isEligibleConsumeToConnectionType(
      mockAverage,
      mockConnectionType
    );

    expect(result).toBe(true);
  });

  it(`should return false
  when average it's not enough for biphasic
  given average and connectionType`, () => {
    const mockAverage = 499;
    const mockConnectionType = connectionTypes.BIPHASIC;

    const connectionTypeHelper = new ConnectionTypeHelper();

    const result = connectionTypeHelper.isEligibleConsumeToConnectionType(
      mockAverage,
      mockConnectionType
    );

    expect(result).toBe(false);
  });

  it(`should return true
  when average it's enough for three phase
  given average and connectionType`, () => {
    const mockAverage = 750;
    const mockConnectionType = connectionTypes.THREE_PHASE;

    const connectionTypeHelper = new ConnectionTypeHelper();

    const result = connectionTypeHelper.isEligibleConsumeToConnectionType(
      mockAverage,
      mockConnectionType
    );

    expect(result).toBe(true);
  });

  it(`should return false
  when average it's not enough for three phase
  given average and connectionType`, () => {
    const mockAverage = 749;
    const mockConnectionType = connectionTypes.THREE_PHASE;

    const connectionTypeHelper = new ConnectionTypeHelper();

    const result = connectionTypeHelper.isEligibleConsumeToConnectionType(
      mockAverage,
      mockConnectionType
    );

    expect(result).toBe(false);
  });

  it(`should return false
  when connection type it's a not valid type
  given average and connectionType`, () => {
    const mockAverage = 749;
    const mockConnectionType = "another type connection";

    const connectionTypeHelper = new ConnectionTypeHelper();

    const result = connectionTypeHelper.isEligibleConsumeToConnectionType(
      mockAverage,
      mockConnectionType
    );

    expect(result).toBe(false);
  });
});
