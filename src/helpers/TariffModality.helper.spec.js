const { tariffModalities } = require("../constants/types.constants");
const ConsumTariffModalityeClassHelper = require("./TariffModality.helper");

describe("TariffModality suit test", () => {
  it(`should return true
  when it's an allowed tariff modality
  given WHITE tariff modality`, () => {
    const mockTariffModality = tariffModalities.WHITE;

    const consumTariffModalityeClassHelper =
      new ConsumTariffModalityeClassHelper();

    const result =
      consumTariffModalityeClassHelper.isValidTariffModality(
        mockTariffModality
      );

    expect(result).toBe(true);
  });

  it(`should return true
  when it's an allowed tariff modality
  given CONVENTIONAL tariff modality`, () => {
    const mockTariffModality = tariffModalities.CONVENTIONAL;

    const consumTariffModalityeClassHelper =
      new ConsumTariffModalityeClassHelper();

    const result =
      consumTariffModalityeClassHelper.isValidTariffModality(
        mockTariffModality
      );

    expect(result).toBe(true);
  });

  it(`should return false
  when it's a not allowed tariff modality
  given GREEN tariff modality`, () => {
    const mockTariffModality = tariffModalities.GREEN;

    const consumTariffModalityeClassHelper =
      new ConsumTariffModalityeClassHelper();

    const result =
      consumTariffModalityeClassHelper.isValidTariffModality(
        mockTariffModality
      );

    expect(result).toBe(false);
  });

  it(`should return false
  when it's a not allowed tariff modality
  given BLUE tariff modality`, () => {
    const mockTariffModality = tariffModalities.BLUE;

    const consumTariffModalityeClassHelper =
      new ConsumTariffModalityeClassHelper();

    const result =
      consumTariffModalityeClassHelper.isValidTariffModality(
        mockTariffModality
      );

    expect(result).toBe(false);
  });

  it(`should return false
  when it's a not allowed tariff modality
  given unknown tariff modality`, () => {
    const mockTariffModality = "unknown";

    const consumTariffModalityeClassHelper =
      new ConsumTariffModalityeClassHelper();

    const result =
      consumTariffModalityeClassHelper.isValidTariffModality(
        mockTariffModality
      );

    expect(result).toBe(false);
  });
});
