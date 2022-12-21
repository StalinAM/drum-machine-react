import React, { useState } from "react";
import styled from "styled-components";
const ButtonC = styled.button`
  padding: 1.5rem;
  cursor: pointer;
  color: white;
  background-color: #333b42;
  font-size: 1.5rem;
  border: 2px solid #fbae3c;
  &:hover {
    background-color: #fbae3c;
    color: #333b42;
  }
`;

function DrumPad({ id, idBtn, src, handelClick, setName }) {
  return (
    <ButtonC
      className="drum-pad"
      id={idBtn}
      onClick={() => {
        handelClick(id);
        setName(idBtn);
      }}
    >
      <audio className="clip" id={id} src={src}></audio>
      {id}
    </ButtonC>
  );
}

export default DrumPad;
