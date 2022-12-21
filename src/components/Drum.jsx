import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import { FirstSounds } from "./sounds";
import Back from "../assets/blob-scene-haikei.svg";

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 100vh;
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Content = styled.div`
  width: 660px;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Display = styled.p`
  border: 3px solid #fbae3c;
  color: white;
  text-align: center;
  font-size: 2rem;
  padding: 0.5rem 0;
`;
function Drum() {
  const [name, setName] = useState("Drum Machine");
  const handelClick = (id) => {
    const tag = document.getElementById(id);
    tag.currentTime = 0;
    tag.play();
  };
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      FirstSounds.map((item) => {
        if (event.key.toUpperCase() == item.id) {
          setName(item.name);
          handelClick(item.id);
        }
      });
    });
  });

  return (
    <Container>
      <Content id="drum-machine">
        <Buttons
          listSounds={FirstSounds}
          handelClick={handelClick}
          setName={setName}
        />
        <Display id="display">{name}</Display>
      </Content>
    </Container>
  );
}

export default Drum;
