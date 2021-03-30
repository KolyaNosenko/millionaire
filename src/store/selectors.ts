import { Answer, Question } from "src/types";
import { sortQuestions } from "src/utils";
import { StoreState } from "./types";
// TODO add reselect
export const getQuestion = (state: StoreState) => (
  questionIdx: number
): Question | undefined => {
  if (!state.questions[questionIdx]) return undefined;

  return state.questions[questionIdx];
};

// TODO add tests
export const getCurrentQuestion = (state: StoreState): Question | undefined => {
  if (!state.questions[state.currentQuestion]) return undefined;

  return state.questions[state.currentQuestion];
};

// TODO add tests
export const getCurrentQuestionAnswers = (state: StoreState): Array<Answer> => {
  if (!state.answers[state.currentQuestion]) return [];

  return state.answers[state.currentQuestion];
};

export const getQuestions = (state: StoreState): Array<Question> => {
  const questions = Object.values(state.questions);
  return sortQuestions(questions);
};

export const getQuestionsPrizes = (
  state: StoreState
): Array<Question & { prize: number }> => {
  const questions = getQuestions(state);

  return questions.reduce(
    (acc: Array<Question & { prize: number }>, question, arrIndex) => {
      acc.push({
        ...question,
        prize: acc[arrIndex - 1]
          ? question.price + acc[arrIndex - 1].prize
          : question.price,
      });

      return acc;
    },
    []
  );
};

export const getFinalPrize = (state: StoreState): number => {
  const questions = getQuestions(state);

  return questions.reduce((acc: number, question) => {
    if (question.answer === question.correctAnswer) {
      return acc + question.price;
    }

    return acc;
  }, 0);
};
