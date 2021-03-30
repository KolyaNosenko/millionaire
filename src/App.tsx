import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider as StoreProvider } from "react-redux";

import { createStore } from "src/store";
import { defaultTheme } from "./theme";
import Main from "./Main";

function App(): JSX.Element {
  const store = createStore();

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
