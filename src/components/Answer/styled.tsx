import styled, { css } from "styled-components";
import { ReactComponent as _AnswerBackground } from "src/assets/icons/answer-bg.svg";
import { AnswerStatus } from "./types";

export const AnswerText = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export const AnswerLabel = styled.div`
  flex-grow: 1;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const AnswerVariant = styled.span`
  margin-right: 8px;
  flex-shrink: 0;
  font-family: ${(props) => props.theme.fontFamilies.primarySemiBold};
  color: ${(props) => props.theme.colors.primary};
`;

export const AnswerWrapper = styled.div`
  position: relative;
  padding-right: 16px;
  padding-left: 16px;
  overflow: hidden;
`;

export const AnswerBackground = styled(_AnswerBackground)`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const correctStyles = css`
  svg,
  &:hover svg {
    stroke: ${(props) => props.theme.colors.success};
    fill: ${(props) => props.theme.colors.successLight2};
  }

  &:before,
  &:after,
  &:hover:before,
  &:hover:after {
    border-color: ${(props) => props.theme.colors.success};
  }
`;

const incorrectStyles = css`
  svg,
  &:hover svg {
    stroke: ${(props) => props.theme.colors.error};
    fill: ${(props) => props.theme.colors.errorLight2};
  }

  &:before,
  &:after,
  &:hover:before,
  &:hover:after {
    border-color: ${(props) => props.theme.colors.error};
  }
`;

export const AnswerContent = styled.div<{ status?: AnswerStatus }>`
  cursor: pointer;
  position: relative;
  min-height: 72px;
  display: flex;
  align-items: center;
  padding: 20px 48px 20px 32px;
  font-size: 20px;
  line-height: 1.16;

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: 18px;
    min-height: 65px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 14px;
    min-height: 56px;
    padding-right: 24px;
    padding-left: 24px;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 0;
    width: 100%;
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    border-top: thin solid ${(props) => props.theme.colors.secondary};
    transition: border-color 0.15s ease-in-out;
  }

  &:before {
    right: calc(100% - 1px);
  }

  &:after {
    left: calc(100% - 1px);
  }

  svg {
    transition: stroke 0.15s ease-in-out, fill 0.15s ease-in-out;
  }

  &:hover,
  &:active {
    svg {
      stroke: ${(props) => props.theme.colors.primary};
    }

    &:before,
    &:after {
      border-color: ${(props) => props.theme.colors.primary};
    }
  }

  &:active {
    svg {
      fill: ${(props) => props.theme.colors.primaryLight2};
    }
  }

  ${(props) => props.status === AnswerStatus.CORRECT && correctStyles}
  ${(props) => props.status === AnswerStatus.INCORRECT && incorrectStyles}
`;
// TODO think about this
// ${AnswerBackground}: {
//   stroke: ${(props) => props.theme.colors.primary};
// }
