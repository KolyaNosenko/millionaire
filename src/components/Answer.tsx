import styled from "styled-components";
import { ReactComponent as _AnswerBackground } from "src/assets/icons/answer-bg.svg";

const AnswerText = styled.div`
  position: relative;
  z-index: 1;
`;

const AnswerWrapper = styled.div`
  position: relative;
  padding-right: 16px;
  padding-left: 16px;
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
    border-top: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const AnswerBackground = styled(_AnswerBackground)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const AnswerContent = styled.div`
  position: relative;
  z-index: 1;
  min-height: 72px;
  display: flex;
  align-items: center;
  padding: 8px 48px 8px 32px;

  font-size: 20px;
  line-height: 1.16;

  &:hover {
    ${AnswerBackground}: {
      stroke: ${(props) => props.theme.colors.primary};
    }
  }
`;

export interface Props {
  status?: "initial" | "correct" | "incorrect";
}

const Answer = ({ status = "initial" }: Props): JSX.Element => {
  console.warn(status);
  return (
    <AnswerWrapper>
      <AnswerContent>
        <AnswerText>A 10 years</AnswerText>
        <AnswerBackground />
      </AnswerContent>
    </AnswerWrapper>
  );
};

export default Answer;
