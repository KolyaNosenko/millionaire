import styled from "styled-components";

const Subtitle = styled.h3`
  font-family: ${(props) => props.theme.fontFamilies.primarySemiBold};
  font-size: 32px;
  line-height: 1.16;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 26px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 18px;
  }
`;

export default Subtitle;
