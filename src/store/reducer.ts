/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { GameScreens } from "src/types";
import { finishGame, initializeGame, setAnswer, startGame } from "./actions";

import { StoreState } from "./types";

const initialState: StoreState = {
  currentQuestion: 0,
  screen: GameScreens.START,
  questions: {},
  answers: {},
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(startGame, (state) => {
      state.screen = GameScreens.IN_PROGRESS;
    })
    .addCase(finishGame, (state) => {
      state.screen = GameScreens.OVER;
    })
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
        console.error("Invalid payload for setAnswer action");
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
    });
});

export default reducer;
