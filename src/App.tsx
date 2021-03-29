import React from "react";
import styled from "styled-components";

import { useGameContext, GameSteps } from "src/context/GameContext";
import GameStart from "src/screens/GameStart";
import GameInProgress from "src/screens/GameInProgress";
import GameOver from "src/screens/GameOver";

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
      {(() => {
        switch (step) {
          case GameSteps.IN_PROGRESS:
            return <GameInProgress />;
          case GameSteps.OVER:
            return <GameOver />;
          case GameSteps.START:
            return <GameStart />;
          default:
            //  TODO think about this
            return "Unknown step";
        }
      })()}
    </Main>
  );
}

export default App;
