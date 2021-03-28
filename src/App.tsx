import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Button from "src/components/Button";
import { defaultTheme } from "src/theme";

const Main = styled.main`
  font-size: 16px;
  font-family: ${(props) => props.theme.fontFamilies.primaryRegular}, serif;
  color: ${(props) => props.theme.colors.secondaryDark};
  background: linear-gradient(
    to left top,
    ${(props) => props.theme.colors.primaryLight2} 50%,
    #ffffff 50%
  );
  height: 100vh;
  overflow: hidden;
`;

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <Button>Start</Button>
      </Main>
    </ThemeProvider>
  );
}

export default App;
