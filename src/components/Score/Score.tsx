import React from "react";
import { normalizePrice } from "src/utils";

import { ScoreStatus, Props } from "./types";
import {
  ScoreWrapper,
  ScoreContent,
  ScoreBackground,
  ScoreLabel,
} from "./styled";

const Score = ({
  children,
  status = ScoreStatus.INCOMING,
}: Props): JSX.Element => {
  const normalizedScore = normalizePrice(children);
  return (
    <ScoreWrapper status={status}>
      <ScoreContent>
        <ScoreBackground status={status} />
        <ScoreLabel status={status}>{normalizedScore}</ScoreLabel>
      </ScoreContent>
    </ScoreWrapper>
  );
};

export default Score;
