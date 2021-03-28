import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonRoot = styled.button`
  min-height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  padding: 8px 15px;
  font-size: 20px;
  line-height: 23px;
  border-radius: 12px;
  outline: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 1px solid ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.primarySemiBold};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondaryLight3};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-color: ${(props) => props.theme.colors.primaryLight};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primaryDark};
    border-color: ${(props) => props.theme.colors.primaryDark};
  }

  //&:disabled {
  //  opacity: 0.65;
  //}
`;

const ButtonLabel = styled.span`
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;

const Button = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element => {
  const { children, ...otherProps } = props;

  return (
    <ButtonRoot {...otherProps}>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonRoot>
  );
};

export default Button;
