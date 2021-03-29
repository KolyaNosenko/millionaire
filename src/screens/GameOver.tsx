import styled from "styled-components";

const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const GameOver = (): JSX.Element => {
  return <Root>Game Over</Root>;
};

export default GameOver;
