import styled from "styled-components";

import Score, { ScoreStatus } from "src/components/Score";
import Answer, { AnswerStatus } from "src/components/Answer";
// TODO check this
import { Answer as AnswerType, Question as QuestionType } from "src/types";
import Subtitle from "src/components/Subtitle";

const Root = styled.div`
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 133px 80px 122px;
  background-color: ${(props) => props.theme.colors.secondaryLight2};
`;

const Question = styled(Subtitle)`
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

const answerGutter = "32px";

const AnswerList = styled.div`
  margin-top: auto;
  padding-top: 30px;
  max-width: 844px;
`;

const AnswerListInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -${answerGutter};
`;

const AnswerListItem = styled.div`
  flex: 0 0 auto;
  width: 50%;
  padding-bottom: ${answerGutter};
`;

export interface Props {
  // TODO rename to current question
  question?: QuestionType;
  answers: Array<AnswerType>;
  questionPrizes: Array<QuestionType & { prize: number }>;
  answerQuestion: (answerIdx: number) => Promise<void>;
}

const GameInProgress = ({
  question,
  answers,
  questionPrizes,
  answerQuestion,
}: Props): JSX.Element => {
  const onQuestionAnswered = (answerIdx: number) => {
    answerQuestion(answerIdx);
  };

  const getAnswerStatus = (answer: AnswerType): AnswerStatus => {
    if (!question || answer.idx !== question.answer)
      return AnswerStatus.INITIAL;

    return question.correctAnswer === answer.idx
      ? AnswerStatus.CORRECT
      : AnswerStatus.INCORRECT;
  };

  const getScoreStatus = (
    questionWithPrize: QuestionType & { prize: number }
  ): ScoreStatus => {
    if (!question) return ScoreStatus.INCOMING;

    if (questionWithPrize.idx > question.idx) return ScoreStatus.INCOMING;

    if (questionWithPrize.idx < question.idx) return ScoreStatus.PASSED;

    return ScoreStatus.ACTIVE;
  };

  return (
    <Root>
      <Content>
        {question && <Question>{question.text}</Question>}

        <AnswerList>
          <AnswerListInner>
            {answers.map((answer) => {
              return (
                <AnswerListItem key={answer.idx}>
                  <Answer
                    status={getAnswerStatus(answer)}
                    variant="B"
                    onClick={() => onQuestionAnswered(answer.idx)}
                  >
                    {answer.text}
                  </Answer>
                </AnswerListItem>
              );
            })}
          </AnswerListInner>
        </AnswerList>
      </Content>
      <ScoreBarWrapper>
        <ScoreBar>
          {questionPrizes.map((questionWithPrize) => {
            return (
              <ScoreBarItem key={questionWithPrize.idx}>
                <Score status={getScoreStatus(questionWithPrize)}>
                  {questionWithPrize.prize}
                </Score>
              </ScoreBarItem>
            );
          })}
        </ScoreBar>
      </ScoreBarWrapper>
    </Root>
  );
};

export default GameInProgress;
