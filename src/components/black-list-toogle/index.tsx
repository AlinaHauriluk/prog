import React, { useState } from "react";
import {
  ToggleContainer,
  BlackListTitle,
  BlackListText,
} from "./black-list-toggle";
import { ToggleSlider } from "react-toggle-slider";
import Chat from "../chat";

const BlackListToggle = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <ToggleContainer>
        <BlackListTitle>Black List</BlackListTitle>
        <ToggleSlider
          barBackgroundColorActive="#b49383"
          barWidth={120}
          transitionDuration="1000ms"
          onToggle={(state) => setActive(state)}
        />
      </ToggleContainer>

      <BlackListText>
        {active ? "Blacklisted contact" : "Contact is available"}
      </BlackListText>

      {!active ? <Chat /> : <BlackListTitle>Chat is closed</BlackListTitle>}
    </>
  );
};

export default BlackListToggle;