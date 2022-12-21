import React from "react";
import { useState } from "react";
import styled from "styled-components";
import DrumPad from "./DrumPad";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  justify-items: center;
`;

function Buttons({ listSounds, handelClick, setName }) {
  return (
    <Container>
      {listSounds.map((item) => (
        <DrumPad
          key={item.id}
          id={item.id}
          idBtn={item.name}
          src={item.src}
          handelClick={handelClick}
          setName={setName}
        />
      ))}
    </Container>
  );
}

export default Buttons;
