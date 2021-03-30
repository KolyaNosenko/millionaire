import styled from "styled-components";

const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamilies.primarySemiBold};
  font-size: 56px;
  line-height: 1.16;

  @media ${(props) => props.theme.breakpoints.laptop} {
    font-size: 46px;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 38px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 32px;
  }
`;

export default Title;
