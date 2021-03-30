import { StoreState } from "src/store";
import { GameSteps } from "src/types";

export function createStoreState(state: Partial<StoreState> = {}): StoreState {
  return {
    gameId: state.gameId || "123",
    screen: state.screen || GameSteps.START,
    currentQuestion: state.currentQuestion || 0,
    answers: {},
    questions: {},
  };
}
