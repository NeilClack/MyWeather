import { styled } from "styled-components";

const Alert = (props) => {
  return (
    <div>
      <p>{props.alert.sender}</p>
      <p>{props.alert.event}</p>
      <p>Start: {props.alert.start}</p>
      <p>End: {props.alert.end}</p>
      <p>{props.alert.description}</p>
    </div>
  );
};

export default Alert;
