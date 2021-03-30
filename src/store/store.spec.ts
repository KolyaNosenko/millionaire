import { createStoreState } from "src/test-utils";
import { GameSteps } from "src/types";

import reducer from "./reducer";
import { startGame, finishGame } from "./actions";

describe("Reducer", () => {
  test("When call startGame, then switch step to IN_PROGRESS", () => {
    const state = createStoreState({ screen: GameSteps.START });

    const result = reducer(state, startGame());

    expect(result.screen).toBe(GameSteps.IN_PROGRESS);
  });

  test("When call finishGame, then switch step to OVER", () => {
    const state = createStoreState({ screen: GameSteps.START });

    const result = reducer(state, finishGame());

    expect(result.screen).toBe(GameSteps.OVER);
  });
});
