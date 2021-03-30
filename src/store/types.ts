import { Answer, GameSteps, Question } from "src/types";

export interface StoreState {
  gameId?: string;
  screen: GameSteps;
  currentQuestion: number;
  questions: { [questionIndex: number]: Question };
  answers: { [questionIndex: number]: Answer };
}
