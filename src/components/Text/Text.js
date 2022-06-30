import styled from "styled-components";

const Text = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Text;
