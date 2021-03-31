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

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 14px;
    min-height: 48px;
  }
`;

const ButtonLabel = styled.span`
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps): JSX.Element => {
  const { children, ...otherProps } = props;

  return (
    <ButtonRoot {...otherProps}>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonRoot>
  );
};

export type IconButtonProps = ButtonProps;

const IconButtonRoot = styled(Button)`
  flex: 0 0 auto;
  overflow: visible;
  border-radius: 50%;
  text-align: center;
  padding: 8px;
  min-height: auto;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.secondaryDark};

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 5px;
  }

  &:hover,
  &:active {
    background-color: transparent;
  }

  svg {
    fill: currentColor;
    transition: fill 0.3s ease-in-out, opacity 0.3s ease-in-out;
    flex-shrink: 0;
    display: inline-block;
    user-select: none;
    width: 1em;
    height: 1em;
  }
`;

export const IconButton = (props: IconButtonProps): JSX.Element => {
  return <IconButtonRoot {...props} />;
};

export default Button;
