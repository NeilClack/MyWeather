import { styled } from "styled-components";
import { convertTsToTime } from "../utils/datetime";

const Alert = (props) => {
  return (
    <div>
      <p>{props.alert.sender_name}</p>
      <p>{props.alert.event}</p>
      <p>Start: {convertTsToTime(props.alert.start)}</p>
      <p>End: {convertTsToTime(props.alert.end)}</p>
      <p>{props.alert.description}</p>
    </div>
  );
};

export default Alert;
