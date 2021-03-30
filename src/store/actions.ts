import { createAction } from "@reduxjs/toolkit";
import { Answer, GameDTO, Question } from "../types";

export const startGame = createAction("START_GAME");
export const finishGame = createAction("FINISH_GAME");
export const initializeGame = createAction(
  "INITIALIZE_GAME",
  (game: GameDTO) => {
    //  TODO move to utils
    const sortedQuestions = game.questions.sort(
      (question1, question2) => question1.index - question2.index
    );

    const answers: { [questionIndex: number]: Array<Answer> } = {};

    const questions = sortedQuestions.reduce(
      (acc: { [index: number]: Question }, question, index, arr) => {
        //  TODO move to utils
        const sortedAnswers = question.answers.sort(
          (answer1, answer2) => answer1.index - answer2.index
        );
        answers[question.index] = sortedAnswers;

        return {
          ...acc,
          [question.index]: {
            ...question,
            nextQuestionIndex: arr[index + 1] && arr[index + 1].index,
          },
        };
      },
      {}
    );

    return {
      payload: {
        gameId: game.id,
        questions,
        answers,
      },
    };
  }
);
