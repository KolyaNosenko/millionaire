import styled from "styled-components";
import { ReactComponent as _ScoreBackground } from "src/assets/icons/score-bg.svg";
import React from "react";

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
    height: 1px;
    width: 100%;
    top: 50%;
    left: 0;
    z-index: 1;
    transform: translateY(-50%);
    border-top: 1px solid;
    border-color: ${(props) =>
      props.status === "active"
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

  stroke: ${(props) =>
    props.status === "active"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
`;

// TODO add transitions
export const ScoreContent = styled.div`
  position: relative;
  min-height: 40px;
  z-index: 2;
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
  z-index: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${(props) => {
    switch (props.status) {
      case "passed":
        return props.theme.colors.secondary;
      case "active":
        return props.theme.colors.primary;
      case "incoming":
      default:
        return props.theme.colors.secondaryDark;
    }
  }};
`;

export type ScoreStatus = "passed" | "active" | "incoming";

export type Props = {
  children: React.ReactText;
  status?: ScoreStatus;
};

const Score = ({ children, status = "incoming" }: Props): JSX.Element => {
  return (
    <ScoreWrapper status={status}>
      <ScoreContent>
        <ScoreLabel status={status}>{children}</ScoreLabel>
        <ScoreBackground status={status} />
      </ScoreContent>
    </ScoreWrapper>
  );
};

export default Score;
