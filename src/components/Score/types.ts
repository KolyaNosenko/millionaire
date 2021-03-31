import React from "react";

export enum ScoreStatus {
  PASSED = "passed",
  ACTIVE = "active",
  INCOMING = "incoming",
}

export type Props = {
  children: React.ReactText;
  status?: ScoreStatus;
};
