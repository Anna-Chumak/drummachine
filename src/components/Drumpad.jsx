import React from "react";
import styled from "styled-components";

const StyledDrumPad = styled.button`
  font-size: 32pt;
  text-align: center;
  color: black;
  font-family: Shalimar;
  border: none;
  border-radius: 5px;
  width: 75px;
  height: 75px;
  margin: 10px;
`;
export default function Drumpad(props) {
  const handleKeyDown = (event) => {
    if (event.keyCode === props.pad.keyCode) {
      let sound = document.getElementById(props.pad.keyName);
      sound.play();
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  return props.pad ? (
    <StyledDrumPad
      className="drum-pad"
      id={props.pad.clipName}
      onClick={() => {
        let sound = document.getElementById(props.pad.keyName);
        sound.play();
        props.setCurrentPad(props.pad);
      }}
    >
      <audio
        src={props.pad.url}
        id={props.pad.keyName}
        className="clip"
      ></audio>
      {props.pad.keyName}
    </StyledDrumPad>
  ) : (
    <></>
  );
}
