/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { GameScreens } from "src/types";
import { finishGame, initializeGame, startGame } from "./actions";

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
    });
});

export default reducer;
