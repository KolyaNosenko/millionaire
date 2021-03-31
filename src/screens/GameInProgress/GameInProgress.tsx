import { useState } from "react";

import Score, { ScoreStatus } from "src/components/Score";
import Answer, { AnswerStatus } from "src/components/Answer";
import { Answer as AnswerType, Question as QuestionType } from "src/types";
import { deriveAlphabetCharByIndex, isAnswerCorrect } from "src/utils";
import { IconButton } from "src/components/Button";
import { ReactComponent as CloseIcon } from "src/assets/icons/close.svg";
import { ReactComponent as MenuIcon } from "src/assets/icons/menu.svg";

import {
  AnswerList,
  AnswerListInner,
  AnswerListItem,
  Content,
  MobileHeader,
  Question,
  Root,
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
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const onMenuControlClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const onQuestionAnswered = (answerIdx: number) => {
    answerQuestion(answerIdx);
  };

  const getAnswerStatus = (answer: AnswerType): AnswerStatus => {
    if (!currentQuestion || answer.idx !== currentQuestion.answer)
      return AnswerStatus.INITIAL;

    return isAnswerCorrect(currentQuestion, answer.idx)
      ? AnswerStatus.CORRECT
      : AnswerStatus.INCORRECT;
  };

  const getScoreStatus = (
    questionWithPrize: QuestionType & { prize: number }
  ): ScoreStatus => {
    if (!currentQuestion) return ScoreStatus.INCOMING;

    if (questionWithPrize.idx > currentQuestion.idx)
      return ScoreStatus.INCOMING;

    if (questionWithPrize.idx < currentQuestion.idx) return ScoreStatus.PASSED;

    return ScoreStatus.ACTIVE;
  };

  return (
    <Root>
      <MobileHeader>
        <IconButton onClick={onMenuControlClick}>
          {isMenuOpened ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </MobileHeader>
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
      <ScoreBarWrapper isOpened={isMenuOpened}>
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
