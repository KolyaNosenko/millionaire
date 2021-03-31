import styled from "styled-components";
import Subtitle from "src/components/Subtitle";

export const Root = styled.div`
  height: 100%;
  display: flex;
`;

export const MobileHeader = styled.div`
  width: 100%;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  align-items: center;
  justify-content: flex-end;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
  }
`;

const mobileHeaderHeight = "56px";

export const Content = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 133px 80px 122px;
  background-color: ${(props) => props.theme.colors.secondaryLight2};

  @media ${(props) => props.theme.breakpoints.laptop} {
    padding: 80px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: ${mobileHeaderHeight} 0 24px;
  }
`;

export const Question = styled(Subtitle)`
  max-width: 624px;

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-right: 16px;
    padding-left: 16px;
    margin-top: auto;
  }
`;

export const ScoreBar = styled.ul``;

export const ScoreBarWrapper = styled.div<{ isOpened?: boolean }>`
  width: 376px;
  flex-shrink: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${ScoreBar} {
    // TODO add scroll
    overflow-y: auto;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 250px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    position: fixed;
    top: ${mobileHeaderHeight};
    right: 0;
    width: 100%;
    height: calc(100vh - ${mobileHeaderHeight});
    transition: transform 0.3s ease-in-out;
    background-color: ${(props) => props.theme.colors.secondaryLight2};
    transform: ${({ isOpened }) =>
      isOpened ? "translateX(0)" : "translateX(100%)"};
    z-index: 9999;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const ScoreBarItem = styled.li`
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const AnswerList = styled.div`
  margin-top: auto;
  padding-top: 30px;
  max-width: 844px;

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-top: 17px;
  }
`;

export const AnswerListInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -32px;

  @media ${(props) => props.theme.breakpoints.laptop} {
    flex-direction: column;
    margin-bottom: -25px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-bottom: -8px;
  }
`;

export const AnswerListItem = styled.div`
  flex: 0 0 auto;
  width: 50%;
  padding-bottom: 32px;

  @media ${(props) => props.theme.breakpoints.laptop} {
    width: 100%;
    padding-bottom: 25px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-bottom: 8px;
  }
`;
