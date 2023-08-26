import { convertTsToTime } from "../datetime";

describe("datetime utility function", () => {
  test("returns the current time, in the current timezone", () => {
    const locale = "America/Chicago";
    const timestampInSeconds = 1691123400;
    // JavaScript uses milliseconds, OpenWeather provides seconds
    let testDate = new Date(timestampInSeconds * 1000);
    let testTime = testDate.toLocaleTimeString({
      locale: locale,
      hour: "2-digit",
      minute: "2-digit",
    });
    // The convertTsToTime takes seconds
    let utilTime = convertTsToTime(timestampInSeconds, locale);
    expect(utilTime).toMatch(testTime);
  });
});
