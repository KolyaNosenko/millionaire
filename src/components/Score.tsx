import styled from "styled-components";
import { ReactComponent as _ScoreBackground } from "src/assets/icons/score-bg.svg";
import React from "react";
import { normalizeScorePrice } from "../utils";

export enum ScoreStatus {
  PASSED = "passed",
  ACTIVE = "active",
  INCOMING = "incoming",
}

export type Props = {
  children: React.ReactText;
  status?: ScoreStatus;
};

export const ScoreWrapper = styled.div<{
  status: ScoreStatus;
}>`
  position: relative;
  padding-right: 68px;
  padding-left: 68px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    height: 0;
    width: 100%;
    top: 50%;
    left: 0;
    transition: border-color 0.15s ease-in-out;
    transform: translateY(-50%);
    border-top: thin solid;
    border-color: ${(props) =>
      props.status === ScoreStatus.ACTIVE
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  }
`;

export const ScoreBackground = styled(_ScoreBackground)<{
  status: ScoreStatus;
}>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: stroke 0.15s ease-in-out;
  stroke: ${(props) =>
    props.status === ScoreStatus.ACTIVE
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
`;

// TODO add transitions
export const ScoreContent = styled.div`
  position: relative;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  // TODO add global line-height
  line-height: 1.16;
  padding: 8px 24px;
`;

export const ScoreLabel = styled.div<{ status: ScoreStatus }>`
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${(props) => {
    switch (props.status) {
      case ScoreStatus.PASSED:
        return props.theme.colors.secondary;
      case ScoreStatus.ACTIVE:
        return props.theme.colors.primary;
      case ScoreStatus.INCOMING:
      default:
        return props.theme.colors.secondaryDark;
    }
  }};
`;

const Score = ({
  children,
  status = ScoreStatus.INCOMING,
}: Props): JSX.Element => {
  const normalizedScore = normalizeScorePrice(children);
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
