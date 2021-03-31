import React from "react";

import { AnswerStatus, Props } from "./types";
import {
  AnswerBackground,
  AnswerContent,
  AnswerLabel,
  AnswerText,
  AnswerVariant,
  AnswerWrapper,
} from "./styled";

const Answer = ({
  status = AnswerStatus.INITIAL,
  onClick,
  children,
  variant = "",
}: Props): JSX.Element => {
  return (
    <AnswerWrapper>
      <AnswerContent onClick={onClick} status={status}>
        <AnswerText>
          {variant && <AnswerVariant>{variant}</AnswerVariant>}
          <AnswerLabel>{children}</AnswerLabel>
        </AnswerText>
        <AnswerBackground />
      </AnswerContent>
    </AnswerWrapper>
  );
};

export default Answer;
