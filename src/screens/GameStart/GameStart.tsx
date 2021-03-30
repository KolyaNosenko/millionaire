import styled from "styled-components";

import { ReactComponent as _GreetingsIcon } from "src/assets/icons/greetings.svg";
import Button from "src/components/Button";

// TODO think about semantic
const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: linear-gradient(
    to left top,
    ${(props) => props.theme.colors.primaryLight2} 50%,
    #ffffff 50%
  );
`;

const GreetingsIcon = styled(_GreetingsIcon)`
  // TODO think about this
  width: 451.61px;
  height: 356.59px;
`;

const GreetingsIconWrapper = styled.div`
  margin-right: 118px;
`;
// TODO maybe move to typography components
const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamilies.primarySemiBold};
  font-size: 56px;
  line-height: 1.16;
`;

// TODO think about naming
const InfoWrapper = styled.div`
  ${Title} {
    margin-bottom: 64px;
  }
`;

const GameStartButton = styled(Button)`
  min-width: 296px;
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
        <Title>
          Who wants to be <br /> millionaire?
        </Title>
        <GameStartButton onClick={startGame}>Start</GameStartButton>
      </InfoWrapper>
    </Root>
  );
};

export default GameStart;
