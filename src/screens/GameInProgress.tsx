import styled from "styled-components";
import Score from "src/components/Score";

const Root = styled.div`
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
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

const GameInProgress = (): JSX.Element => {
  return (
    <Root>
      <Content>
        <Question>
          How old your elder brother was 10 years before you was born, mate?
        </Question>
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
