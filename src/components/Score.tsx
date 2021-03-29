import styled from "styled-components";
import { ReactComponent as _ScoreBackground } from "src/assets/icons/score-bg.svg";
import React from "react";

export const ScoreWrapper = styled.div`
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
    transform: translateY(-50%);
    border-top: 1px solid ${(props) => props.theme.colors.secondary};
    z-index: 1;
  }
`;

export const ScoreBackground = styled(_ScoreBackground)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ScoreContent = styled.div`
  position: relative;
  min-height: 40px;
  z-index: 2;
  display: block;
  text-align: center;
  font-size: 20px;
  // TODO add global line-height
  line-height: 1.16;
  padding: 8px 24px;
`;

export const ScoreLabel = styled.div`
  position: relative;
  z-index: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Score = ({ children }: { children: React.ReactText }): JSX.Element => {
  return (
    <ScoreWrapper>
      <ScoreContent>
        <ScoreLabel>{children}</ScoreLabel>
        <ScoreBackground />
      </ScoreContent>
    </ScoreWrapper>
  );
};

export default Score;
