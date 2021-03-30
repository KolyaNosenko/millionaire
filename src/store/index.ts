import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export * from "./actions";
export * from "./types";

export default function createStore() {
  // TODO think about dev tools in prod
  return configureStore({
    reducer,
  });
}

export type AppStore = ReturnType<typeof createStore>;
