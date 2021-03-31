import React from "react";

export enum AnswerStatus {
  INITIAL = "initial",
  CORRECT = "correct",
  INCORRECT = "incorrect",
}

export interface Props {
  status?: AnswerStatus;
  onClick?: () => void;
  children: React.ReactText;
  variant?: string;
}
