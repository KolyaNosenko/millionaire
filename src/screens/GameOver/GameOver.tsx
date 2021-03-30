import styled from "styled-components";
import { rgba } from "polished";
import { ReactComponent as _GreetingsIcon } from "src/assets/icons/greetings.svg";
import Button from "src/components/Button";
import MainTitle from "src/components/MainTitle";

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

const Subtitle = styled.h3`
  font-family: ${(props) => props.theme.fontFamilies.primarySemiBold};
  color: ${(props) => rgba(props.theme.colors.secondaryDark, 0.5)};
  font-size: 32px;
  line-height: 1.16;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: 26px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 18px;
  }
`;

// TODO think about naming
const InfoWrapper = styled.div`
  ${MainTitle} {
    margin-bottom: 64px;

    @media ${(props) => props.theme.breakpoints.mobile} {
      margin-bottom: 18vh;
    }
  }
`;

const GameStartButton = styled(Button)`
  max-width: 296px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.mobile} {
    max-width: none;
  }
`;

const GameOver = (): JSX.Element => {
  return (
    <Root>
      <Content>
        <GreetingsIconWrapper>
          <GreetingsIcon />
        </GreetingsIconWrapper>
        <InfoWrapper>
          <Subtitle>Total score:</Subtitle>
          <MainTitle>$8,000 earned</MainTitle>
          <GameStartButton>Try again</GameStartButton>
        </InfoWrapper>
      </Content>
    </Root>
  );
};

export default GameOver;
