import styled from "styled-components";
import { ReactComponent as _GreetingsIcon } from "src/assets/icons/greetings.svg";
import Button from "src/components/Button";
import MainTitle from "src/components/MainTitle";
import Subtitle from "src/components/Subtitle";
import { rgba } from "polished";
import { normalizePrice } from "src/utils";

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  background-color: ${(props) => props.theme.colors.secondaryLight2};

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 48px 16px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    justify-content: flex-end;
  }
`;

const GreetingsIcon = styled(_GreetingsIcon)`
  // TODO think about this
  width: 100%;
  height: auto;
`;

const GreetingsIconWrapper = styled.div`
  margin-right: 118px;
  flex: 1;
  max-width: 452px;
  font-size: 0;
  line-height: 0;

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin: 0 auto 10px;
    max-width: 350px;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    max-width: 196px;
  }
`;

const Content = styled.div`
  padding-bottom: 75px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-bottom: 0;
  }
`;

// TODO think about naming
const InfoWrapper = styled.div`
  flex: 1;
  max-width: 455px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    max-width: none;
  }

  ${MainTitle} {
    margin-bottom: 64px;

    @media ${(props) => props.theme.breakpoints.mobile} {
      margin-bottom: 18vh;
    }
  }

  ${Subtitle} {
    color: ${(props) => rgba(props.theme.colors.secondaryDark, 0.5)};
  }
`;

const GameStartButton = styled(Button)`
  max-width: 296px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.mobile} {
    max-width: none;
  }
`;

export interface Props {
  finalPrize: number;
  restartGame: () => Promise<void>;
}

const GameOver = ({ finalPrize, restartGame }: Props): JSX.Element => {
  return (
    <Root>
      <Content>
        <GreetingsIconWrapper>
          <GreetingsIcon />
        </GreetingsIconWrapper>
        <InfoWrapper>
          <Subtitle>Total score:</Subtitle>
          <MainTitle>{normalizePrice(finalPrize)} earned</MainTitle>
          <GameStartButton onClick={restartGame}>Try again</GameStartButton>
        </InfoWrapper>
      </Content>
    </Root>
  );
};

export default GameOver;
