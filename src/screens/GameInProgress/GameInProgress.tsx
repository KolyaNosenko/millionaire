import styled from "styled-components";

import Score from "src/components/Score";
import Answer from "src/components/Answer";
// TODO check this
import { Question as QuestionType, Answer as AnswerType } from "src/types";

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

export interface Props {
  question?: QuestionType;
  answers: Array<AnswerType>;
  answerQuestion: (answerIdx: number) => Promise<void>;
}

const GameInProgress = ({
  question,
  answers,
  answerQuestion,
}: Props): JSX.Element => {
  const onQuestionAnswered = (answerIdx: number) => {
    answerQuestion(answerIdx);
  };

  return (
    <Root>
      <Content>
        <Question>{question?.text}</Question>

        <AnswerList>
          {answers.map((answer) => {
            return (
              <AnswerListItem key={answer.idx}>
                <Answer
                  label={answer.text}
                  onClick={() => onQuestionAnswered(answer.idx)}
                />
              </AnswerListItem>
            );
          })}
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
