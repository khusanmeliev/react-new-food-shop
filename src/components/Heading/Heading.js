import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  text-indent: ${({ textIndent }) => textIndent};
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};
`;

export default Heading;
