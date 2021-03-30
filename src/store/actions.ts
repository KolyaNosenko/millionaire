import { createAction } from "@reduxjs/toolkit";
import { Answer, GameDTO, Question } from "../types";

export const startGame = createAction("START_GAME");
export const finishGame = createAction("FINISH_GAME");
export const initializeGame = createAction(
  "INITIALIZE_GAME",
  (game: GameDTO) => {
    //  TODO move to utils
    const sortedQuestions = [...game.questions].sort(
      (question1, question2) => question1.idx - question2.idx
    );

    const answers: { [questionIndex: number]: Array<Answer> } = {};

    const questions = sortedQuestions.reduce(
      (acc: { [index: number]: Question }, question, arrayIndex, arr) => {
        //  TODO move to utils
        const sortedAnswers = [...question.answers].sort(
          (answer1, answer2) => answer1.idx - answer2.idx
        );
        answers[question.idx] = sortedAnswers;

        return {
          ...acc,
          [question.idx]: {
            ...question,
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
