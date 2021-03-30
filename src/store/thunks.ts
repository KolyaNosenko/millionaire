import { ThunkedAction } from "./types";
import { initializeGame } from "./actions";

export function doStartGame(): ThunkedAction {
  return async (dispatch) => {
    const game = await import("src/data/game.json");
    dispatch(initializeGame(game));
  };
}
