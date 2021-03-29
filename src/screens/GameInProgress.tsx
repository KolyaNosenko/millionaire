import styled from "styled-components";
import { ReactComponent as _AnswerBackground } from "src/assets/icons/answer-bg.svg";

import Score from "src/components/Score";

const Root = styled.div`
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // TODO change to proper
  padding: 80px;
  background-color: ${(props) => props.theme.colors.secondaryLight2};
`;

const Question = styled.p`
  font-size: 32px;
  line-height: 1.16;
  font-family: ${(props) => props.theme.fontFamilies.primarySemiBold};
  max-width: 624px;
`;

const ScoreBar = styled.ul``;

const ScoreBarWrapper = styled.div`
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
`;

const ScoreBarItem = styled.li`
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const AnswerList = styled.ul`
  // TODO change
  margin-top: auto;
`;

const AnswerListItem = styled.li`
  // TODO change
  width: 389px;
`;

const Answer = styled.div`
  position: relative;
  z-index: 1;
  min-height: 72px;
  display: flex;
  align-items: center;
  padding: 8px 48px 8px 32px;

  font-size: 20px;
  line-height: 1.16;
`;

const AnswerText = styled.div`
  position: relative;
  z-index: 1;
`;

const AnswerWrapper = styled.div`
  position: relative;
  padding-right: 16px;
  padding-left: 16px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 50%;
    left: 0;
    z-index: 1;
    transform: translateY(-50%);
    border-top: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const AnswerBackground = styled(_AnswerBackground)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const GameInProgress = (): JSX.Element => {
  return (
    <Root>
      <Content>
        <Question>
          How old your elder brother was 10 years before you was born, mate?
        </Question>

        <AnswerList>
          <AnswerListItem>
            <AnswerWrapper>
              <Answer>
                <AnswerText>A 10 years</AnswerText>
                <AnswerBackground />
              </Answer>
            </AnswerWrapper>
          </AnswerListItem>
        </AnswerList>
      </Content>
      <ScoreBarWrapper>
        <ScoreBar>
          <ScoreBarItem>
            <Score status="passed">$1,000,000</Score>
          </ScoreBarItem>
          <ScoreBarItem>
            <Score status="active">$1,000,000</Score>
          </ScoreBarItem>
        </ScoreBar>
      </ScoreBarWrapper>
    </Root>
  );
};

export default GameInProgress;
