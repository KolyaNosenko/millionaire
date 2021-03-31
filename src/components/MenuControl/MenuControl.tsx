import styled from "styled-components";

export const Burger = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;

  span {
    width: 16px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(16px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export interface Props {
  isOpen?: boolean;
  onClick?: () => void;
}

const MenuControl = ({
  isOpen = false,
  onClick = () => ({}),
}: Props): JSX.Element => {
  return (
    <Burger
      isOpen={isOpen}
      onClick={onClick}
      // aria-label="Toggle menu"
      // aria-expanded={isExpanded}
      // open={open}
      // onClick={() => setOpen(!open)}
      // {...props}
    >
      <span />
      <span />
      <span />
    </Burger>
  );
};

MenuControl.defaultProps = {
  isOpen: false,
};

export default MenuControl;
