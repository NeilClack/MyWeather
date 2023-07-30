import { convertTsToTime } from "../datetime";

describe("datetime utility function", () => {
  test("returns the current hours", () => {
    const currentEpoch = Date.now();
    const currentDateObject = new Date(currentEpoch);
    const currentHour = currentDateObject.getHours();

    const returnedTime = convertTsToTime(currentEpoch);
    const returnedHour = Number(returnedTime.split(":")[0]);

    expect(returnedHour).toBe(currentHour);
  });
  test("returns the correct minute", () => {
    const currentEpoch = Date.now();
    const currentDateObject = new Date(currentEpoch);
    const currentMinute = currentDateObject.getMinutes();

    const returnedTime = convertTsToTime(currentEpoch);
    const returnedMinute = Number(returnedTime.split(":")[1]);

    expect(returnedMinute).toBe(currentMinute);
  });
});
