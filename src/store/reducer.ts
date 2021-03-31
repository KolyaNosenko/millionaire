/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { GameScreens } from "src/types";
import { clearGame, initializeGame, nextQuestion, setAnswer } from "./actions";

import { StoreState } from "./types";

const initialState: StoreState = {
  currentQuestion: 0,
  screen: GameScreens.START,
  questions: {},
  answers: {},
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(initializeGame, (state, { payload }) => {
      state.gameId = payload.gameId || "";
      state.questions = payload.questions;
      state.answers = payload.answers;
      state.screen = GameScreens.IN_PROGRESS;
      state.currentQuestion = payload.currentQuestion;
    })
    .addCase(setAnswer, (state, { payload }) => {
      const { currentQuestion } = state;
      if (
        !state.answers[currentQuestion] ||
        !state.questions[currentQuestion]
      ) {
        console.error("Invalid state for setAnswer action");
        return;
      }

      if (
        state.questions[currentQuestion].answer ||
        state.questions[currentQuestion].answer === 0
      ) {
        return;
      }

      const foundAnswer = state.answers[currentQuestion].find(
        (answer) => answer.idx === payload
      );

      if (!foundAnswer) {
        console.error("Answer not found for setAnswer action");
        return;
      }

      state.questions[currentQuestion].answer = payload;
    })
    .addCase(nextQuestion, (state) => {
      const { currentQuestion } = state;
      const question = state.questions[currentQuestion];

      if (!question || (!question.answer && question.answer !== 0)) {
        console.error("Invalid state for nextQuestion action");
        return;
      }

      if (question.correctAnswer !== question.answer) {
        state.screen = GameScreens.OVER;
        return;
      }

      if (
        question.correctAnswer === question.answer &&
        (question.nextQuestionIndex || question.nextQuestionIndex === 0)
      ) {
        state.currentQuestion = question.nextQuestionIndex;
        return;
      }

      state.screen = GameScreens.OVER;
    })
    .addCase(clearGame, () => {
      return initialState;
    });
});

export default reducer;
