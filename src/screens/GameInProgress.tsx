import styled from "styled-components";
import { ReactComponent as _ScoreBackground } from "src/assets/icons/score-bg.svg";

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

const ScoreWrapper = styled.div`
  position: relative;
  padding-right: 68px;
  padding-left: 68px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-top: 1px solid ${(props) => props.theme.colors.secondary};
    z-index: 1;
  }
`;

const ScoreBackground = styled(_ScoreBackground)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Score = styled.div`
  position: relative;
  min-height: 40px;
  z-index: 2;
  display: block;
  text-align: center;
  font-size: 20px;
  // TODO add global line-height
  line-height: 1.16;
  padding: 8px 24px;
`;

const ScoreLabel = styled.div`
  position: relative;
  z-index: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
            <ScoreWrapper>
              <Score>
                <ScoreLabel>$1,000,000</ScoreLabel>
                <ScoreBackground />
              </Score>
            </ScoreWrapper>
          </ScoreBarItem>
          <ScoreBarItem>
            <ScoreWrapper>
              <Score>
                <ScoreLabel>$1,000,000</ScoreLabel>
                <ScoreBackground />
              </Score>
            </ScoreWrapper>
          </ScoreBarItem>
        </ScoreBar>
      </ScoreBarWrapper>
    </Root>
  );
};

export default GameInProgress;
