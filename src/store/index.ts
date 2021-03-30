import { configureStore } from "@reduxjs/toolkit";
import game from "src/data/game.json";

import reducer from "./reducer";
import { initializeGame } from "./actions";

export * from "./actions";
export * from "./types";

export function createStore() {
  // TODO think about dev tools in prod
  const store = configureStore({
    reducer,
  });

  store.dispatch(initializeGame(game));

  return store;
}

export type AppStore = ReturnType<typeof createStore>;
