import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Answer, GameScreens, Question } from "src/types";
import { clearGame, initializeGame, nextQuestion, setAnswer } from "./actions";

export interface StoreState {
  gameId?: string;
  screen: GameScreens;
  currentQuestion: number;
  questions: { [questionIndex: number]: Question };
  answers: { [questionIndex: number]: Array<Answer> };
}

export type StoreActions =
  | ReturnType<typeof initializeGame>
  | ReturnType<typeof setAnswer>
  | ReturnType<typeof nextQuestion>
  | ReturnType<typeof clearGame>;

export type ThunkedAction<T = void> = ThunkAction<
  T,
  StoreState,
  undefined,
  StoreActions
>;

export type StoreDispatch = ThunkDispatch<StoreState, undefined, StoreActions>;
