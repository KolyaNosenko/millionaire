import styled from "styled-components";
import { ReactComponent as _GreetingsIcon } from "src/assets/icons/greetings.svg";
import MainTitle from "src/components/MainTitle";
import Button from "src/components/Button";

export const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  background: linear-gradient(
    to left top,
    ${(props) => props.theme.colors.primaryLight2} 50%,
    #ffffff 50%
  );

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 48px 16px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    justify-content: flex-end;
  }
`;

export const GreetingsIcon = styled(_GreetingsIcon)`
  width: 100%;
  height: auto;
`;

export const GreetingsIconWrapper = styled.div`
  margin-right: 118px;
  flex: 1;
  max-width: 452px;
  font-size: 0;
  line-height: 0;

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin: 0 auto 50px;
    max-width: 350px;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    max-width: 196px;
  }
`;

export const Content = styled.div`
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

export const InfoWrapper = styled.div`
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
`;

export const GameStartButton = styled(Button)`
  max-width: 296px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.mobile} {
    max-width: none;
  }
`;
