import styled from "styled-components";

const Text = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ align }) => align};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Text;
