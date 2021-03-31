import MainTitle from "src/components/MainTitle";
import Subtitle from "src/components/Subtitle";
import { normalizePrice } from "src/utils";

import {
  Root,
  InfoWrapper,
  GreetingsIconWrapper,
  GreetingsIcon,
  GameStartButton,
  Content,
} from "./styled";

export interface Props {
  finalPrize: number;
  restartGame: () => Promise<void>;
}

const GameOver = ({ finalPrize, restartGame }: Props): JSX.Element => {
  return (
    <Root>
      <Content>
        <GreetingsIconWrapper>
          <GreetingsIcon />
        </GreetingsIconWrapper>
        <InfoWrapper>
          <Subtitle>Total score:</Subtitle>
          <MainTitle>{normalizePrice(finalPrize)} earned</MainTitle>
          <GameStartButton onClick={restartGame}>Try again</GameStartButton>
        </InfoWrapper>
      </Content>
    </Root>
  );
};

export default GameOver;
