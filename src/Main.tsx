import styled from "styled-components";
import React from "react";
import { GameSteps } from "src/types";
import GameInProgress from "src/screens/GameInProgress";
import GameOver from "src/screens/GameOver";
import GameStart from "src/screens/GameStart";

const MainRoot = styled.main`
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamilies.primaryRegular}, serif;
  color: ${(props) => props.theme.colors.secondaryDark};
  height: 100vh;
  overflow: hidden;
`;

const Main = ({
  screen = GameSteps.START,
}: {
  screen?: GameSteps;
}): JSX.Element => {
  return (
    <MainRoot>
      {(() => {
        switch (screen) {
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
    </MainRoot>
  );
};

Main.defaultProps = {
  screen: GameSteps.START,
};

export default Main;
