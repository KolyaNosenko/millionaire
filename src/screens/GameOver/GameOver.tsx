import styled from "styled-components";
import { rgba } from "polished";
import { ReactComponent as _GreetingsIcon } from "src/assets/icons/greetings.svg";
import Button from "src/components/Button";

const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.secondaryLight2};
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

const Subtitle = styled.h3`
  font-family: ${(props) => props.theme.fontFamilies.primarySemiBold};
  color: ${(props) => rgba(props.theme.colors.secondaryDark, 0.5)};
  font-size: 32px;
  line-height: 1.16;
  margin-bottom: 8px;
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

const GameOver = (): JSX.Element => {
  return (
    <Root>
      <GreetingsIconWrapper>
        <GreetingsIcon />
      </GreetingsIconWrapper>
      <InfoWrapper>
        <Subtitle>Total score:</Subtitle>
        <Title>$8,000 earned</Title>
        <GameStartButton>Try again</GameStartButton>
      </InfoWrapper>
    </Root>
  );
};

export default GameOver;
