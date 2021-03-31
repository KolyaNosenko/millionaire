import Score, { ScoreStatus } from "src/components/Score";
import Answer, { AnswerStatus } from "src/components/Answer";
import { Answer as AnswerType, Question as QuestionType } from "src/types";
import { deriveAlphabetCharByIndex } from "src/utils";

import {
  Root,
  Content,
  Question,
  AnswerList,
  AnswerListInner,
  AnswerListItem,
  ScoreBar,
  ScoreBarItem,
  ScoreBarWrapper,
} from "./styled";

export interface Props {
  currentQuestion?: QuestionType;
  answers: Array<AnswerType>;
  questionPrizes: Array<QuestionType & { prize: number }>;
  answerQuestion: (answerIdx: number) => Promise<void>;
}

const GameInProgress = ({
  currentQuestion,
  answers,
  questionPrizes,
  answerQuestion,
}: Props): JSX.Element => {
  const onQuestionAnswered = (answerIdx: number) => {
    answerQuestion(answerIdx);
  };

  const getAnswerStatus = (answer: AnswerType): AnswerStatus => {
    if (!currentQuestion || answer.idx !== currentQuestion.answer)
      return AnswerStatus.INITIAL;

    return currentQuestion.correctAnswer === answer.idx
      ? AnswerStatus.CORRECT
      : AnswerStatus.INCORRECT;
  };

  const getScoreStatus = (
    questionWithPrize: QuestionType & { prize: number }
  ): ScoreStatus => {
    if (!currentQuestion) return ScoreStatus.INCOMING;

    if (questionWithPrize.idx > currentQuestion.idx) return ScoreStatus.INCOMING;

    if (questionWithPrize.idx < currentQuestion.idx) return ScoreStatus.PASSED;

    return ScoreStatus.ACTIVE;
  };

  return (
    <Root>
      <Content>
        {currentQuestion && <Question>{currentQuestion.text}</Question>}

        <AnswerList>
          <AnswerListInner>
            {answers.map((answer, index) => {
              return (
                <AnswerListItem key={answer.idx}>
                  <Answer
                    status={getAnswerStatus(answer)}
                    variant={deriveAlphabetCharByIndex(index)}
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
