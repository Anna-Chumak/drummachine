import React from "react";
import styled from "styled-components";

const StyledDisplayBox = styled.div`
  text-align: center;
  width: 300px;
  padding: 10px;
  background-color: #5f5f5f;
  color: orange;
  border-radius: 5px;
`;

export default function Display(props) {
  return <StyledDisplayBox id="display">{props.clipName}</StyledDisplayBox>;
}
