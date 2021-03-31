import { sleep, TIMEOUT_AFTER_ANSWER } from "src/utils";
import { ThunkedAction } from "./types";
import { clearGame, initializeGame, nextQuestion, setAnswer } from "./actions";

export function doStartGame(): ThunkedAction {
  return async (dispatch) => {
    const game = await import("src/data/game.json");
    dispatch(initializeGame(game));
  };
}

export function doAnswerQuestion(answerIdx: number): ThunkedAction {
  return async (dispatch) => {
    dispatch(setAnswer(answerIdx));
    await sleep(TIMEOUT_AFTER_ANSWER);
    dispatch(nextQuestion());
  };
}

export function doRestartGame(): ThunkedAction {
  return async (dispatch) => {
    dispatch(clearGame());
    dispatch(doStartGame());
  };
}
