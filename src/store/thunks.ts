import { ThunkedAction } from "./types";
import { initializeGame } from "./actions";

// eslint-disable-next-line import/prefer-default-export
export function doStartGame(): ThunkedAction {
  return async (dispatch) => {
    const game = await import("src/data/game.json");
    dispatch(initializeGame(game));
  };
}
