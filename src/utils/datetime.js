const convertTsToTime = (timestamp, timezone) => {
  timestamp = timestamp * 1000;
  let tempDate = new Date(timestamp);
  let time = tempDate.toLocaleTimeString({
    locale: timezone,
    hour: "2-digit",
    minute: "2-digit",
  });
  return time;
};

export { convertTsToTime };
