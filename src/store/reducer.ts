/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { GameSteps } from "src/types";
import { finishGame, startGame } from "./actions";

import { StoreState } from "./types";

const initialState: StoreState = {
  currentQuestion: 0,
  screen: GameSteps.START,
  questions: {},
  answers: {},
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(startGame, (state) => {
      state.screen = GameSteps.IN_PROGRESS;
    })
    .addCase(finishGame, (state) => {
      state.screen = GameSteps.OVER;
    });
});

export default reducer;
