const convertTsToTime = (timestamp) => {
  let tempDate = new Date(timestamp);
  let hours = tempDate.getHours();
  let minutes = tempDate.getMinutes();
  let convertedTime = `${hours}:${minutes}`;

  return convertedTime;
};

export { convertTsToTime };
