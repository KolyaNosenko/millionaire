import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";

import { GameScreens } from "src/types";
import GameInProgress from "src/screens/GameInProgress";
import GameOver from "src/screens/GameOver";
import GameStart from "src/screens/GameStart";
import { StoreState } from "src/store";

const MainRoot = styled.main`
  position: relative;
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamilies.primaryRegular}, serif;
  color: ${(props) => props.theme.colors.secondaryDark};
  height: 100vh;
  overflow: hidden;
`;

const Main = ({
  screen = GameScreens.START,
}: {
  screen?: GameScreens;
}): JSX.Element => {
  return (
    <MainRoot>
      {(() => {
        switch (screen) {
          case GameScreens.IN_PROGRESS:
            return <GameInProgress />;
          case GameScreens.OVER:
            return <GameOver />;
          case GameScreens.START:
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
  screen: GameScreens.START,
};

const mapStateToProps = (state: StoreState) => ({
  screen: state.screen,
});

export default connect(mapStateToProps)(Main);
