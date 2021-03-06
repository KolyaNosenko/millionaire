import { createAction } from "@reduxjs/toolkit";
import { sortAnswers, sortQuestions } from "src/utils";
import { Answer, GameDTO, Question } from "src/types";

export const initializeGame = createAction(
  "INITIALIZE_GAME",
  (game: GameDTO) => {
    const sortedQuestions = sortQuestions(game.questions);

    const answers: { [questionIndex: number]: Array<Answer> } = {};

    const questions = sortedQuestions.reduce(
      (acc: { [index: number]: Question }, question, arrayIndex, arr) => {
        answers[question.idx] = sortAnswers(question.answers);

        const { answers: ans, ...quoteProps } = question;
        return {
          ...acc,
          [question.idx]: {
            ...quoteProps,
            nextQuestionIndex: arr[arrayIndex + 1] && arr[arrayIndex + 1].idx,
          },
        };
      },
      {}
    );

    return {
      payload: {
        gameId: game.id,
        currentQuestion: sortedQuestions[0] ? sortedQuestions[0].idx : 0,
        questions,
        answers,
      },
    };
  }
);
export const setAnswer = createAction<number>("SET_ANSWER");
export const nextQuestion = createAction("NEXT_QUESTION");
export const clearGame = createAction("CLEAR_GAME");
