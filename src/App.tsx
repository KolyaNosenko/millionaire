import React from "react";
import styled from "styled-components";

import { useGameContext } from "src/context/GameContext";
import GameStart from "src/screens/GameStart";

const Main = styled.main`
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamilies.primaryRegular}, serif;
  color: ${(props) => props.theme.colors.secondaryDark};
  background: linear-gradient(
    to left top,
    ${(props) => props.theme.colors.primaryLight2} 50%,
    #ffffff 50%
  );
  height: 100vh;
  overflow: hidden;
`;

function App(): JSX.Element {
  const { step } = useGameContext();

  return (
    <Main>
      <GameStart />
    </Main>
  );
}

export default App;
