import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Provider as StoreProvider } from "react-redux";

import { createStore } from "src/store";
import { useGameContext, GameSteps } from "src/context/GameContext";
import GameStart from "src/screens/GameStart";
import GameInProgress from "src/screens/GameInProgress";
import GameOver from "src/screens/GameOver";
import { defaultTheme } from "./theme";

const Main = styled.main`
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamilies.primaryRegular}, serif;
  color: ${(props) => props.theme.colors.secondaryDark};
  height: 100vh;
  overflow: hidden;
`;

function App(): JSX.Element {
  const { step } = useGameContext();
  const store = createStore();

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
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
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
