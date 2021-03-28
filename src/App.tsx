import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { defaultTheme } from "./theme";

const Main = styled.main`
  color: ${(props) => props.theme.colors.primary};
`;

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main className="App">Hello World</Main>
    </ThemeProvider>
  );
}

export default App;
