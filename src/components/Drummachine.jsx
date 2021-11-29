import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Drumpad from "./Drumpad";

const StyledDrumBox = styled.div`
  text-align: center;
  width: 350px;
  padding: 50px;
  background-color: black;
  border-radius: 5px;
`;

export default function Drummachine(props) {
  return (
    <StyledDrumBox id="drum-machine">
      <Display clipName={props.currentPad.clipName} />
      {props.pads &&
        props.pads.map((pad) => {
          return <Drumpad pad={pad} setCurrentPad={props.setCurrentPad} />;
        })}
    </StyledDrumBox>
  );
}
