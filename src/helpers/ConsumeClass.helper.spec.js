const { consumeClasses } = require("../constants/types.constants");
const ConsumeClassHelper = require("./ConsumeClass.helper");

describe("ConsumeClassHelper suit test", () => {
  it(`should return true
  when it's an allowed class consume
  given HOME consume class`, () => {
    const mockConsumeClass = consumeClasses.HOME;

    const consumeClassHelper = new ConsumeClassHelper();

    const result = consumeClassHelper.isValidConsumeClass(mockConsumeClass);

    expect(result).toBe(true);
  });

  it(`should return true
  when it's an allowed class consume
  given INDUSTRY consume class`, () => {
    const mockConsumeClass = consumeClasses.INDUSTRY;

    const consumeClassHelper = new ConsumeClassHelper();

    const result = consumeClassHelper.isValidConsumeClass(mockConsumeClass);

    expect(result).toBe(true);
  });

  it(`should return true
  when it's an allowed class consume
  given COMMERCIAL consume class`, () => {
    const mockConsumeClass = consumeClasses.COMMERCIAL;

    const consumeClassHelper = new ConsumeClassHelper();

    const result = consumeClassHelper.isValidConsumeClass(mockConsumeClass);

    expect(result).toBe(true);
  });

  it(`should return false
  when it's a not allowed class consume
  given RURAL consume class`, () => {
    const mockConsumeClass = consumeClasses.RURAL;

    const consumeClassHelper = new ConsumeClassHelper();

    const result = consumeClassHelper.isValidConsumeClass(mockConsumeClass);

    expect(result).toBe(false);
  });

  it(`should return false
  when it's a not allowed class consume
  given PUBLIC consume class`, () => {
    const mockConsumeClass = consumeClasses.PUBLIC;

    const consumeClassHelper = new ConsumeClassHelper();

    const result = consumeClassHelper.isValidConsumeClass(mockConsumeClass);

    expect(result).toBe(false);
  });

  it(`should return false
  when it's a not allowed class consume
  given unknown consume class`, () => {
    const mockConsumeClass = "unknown";

    const consumeClassHelper = new ConsumeClassHelper();

    const result = consumeClassHelper.isValidConsumeClass(mockConsumeClass);

    expect(result).toBe(false);
  });
});
