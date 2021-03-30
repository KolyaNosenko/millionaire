import { Answer, GameScreens, Question } from "src/types";

export interface StoreState {
  gameId?: string;
  screen: GameScreens;
  currentQuestion: number;
  questions: { [questionIndex: number]: Question };
  answers: { [questionIndex: number]: Array<Answer> };
}
