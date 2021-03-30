import styled from "styled-components";

import { ReactComponent as _GreetingsIcon } from "src/assets/icons/greetings.svg";
import Button from "src/components/Button";
import MainTitle from "src/components/MainTitle";

const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: linear-gradient(
    to left top,
    ${(props) => props.theme.colors.primaryLight2} 50%,
    #ffffff 50%
  );
`;

const GreetingsIcon = styled(_GreetingsIcon)`
  width: 100%;
  height: auto;
`;

const GreetingsIconWrapper = styled.div`
  margin-right: 118px;
  flex: 1;
  max-width: 452px;
  font-size: 0;
  line-height: 0;
`;

// TODO think about naming
const InfoWrapper = styled.div`
  ${MainTitle} {
    margin-bottom: 64px;
  }
`;

const GameStartButton = styled(Button)`
  max-width: 296px;
  width: 100%;
`;

const GameStart = ({
  startGame,
}: {
  startGame: () => Promise<void>;
}): JSX.Element => {
  return (
    <Root>
      <GreetingsIconWrapper>
        <GreetingsIcon />
      </GreetingsIconWrapper>
      <InfoWrapper>
        <MainTitle>
          Who wants to be <br /> millionaire?
        </MainTitle>
        <GameStartButton onClick={startGame}>Start</GameStartButton>
      </InfoWrapper>
    </Root>
  );
};

export default GameStart;
