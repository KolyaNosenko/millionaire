import MainTitle from "src/components/MainTitle";

import {
  Root,
  Content,
  GameStartButton,
  GreetingsIcon,
  GreetingsIconWrapper,
  InfoWrapper,
} from "./styled";

const GameStart = ({
  startGame,
}: {
  startGame: () => Promise<void>;
}): JSX.Element => {
  return (
    <Root>
      <Content>
        <GreetingsIconWrapper>
          <GreetingsIcon />
        </GreetingsIconWrapper>
        <InfoWrapper>
          <MainTitle>
            Who wants to be <br /> millionaire?
          </MainTitle>
          <GameStartButton onClick={startGame}>Start</GameStartButton>
        </InfoWrapper>
      </Content>
    </Root>
  );
};

export default GameStart;
