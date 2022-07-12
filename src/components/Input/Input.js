import styled from "styled-components";

export const Input = styled.input`
  width: ${({ wd }) => wd || "100%"};
  height: 35px;
  outline: none;
  border-radius: 8px;
  border: ${({ border }) => border || "none"};
  text-indent: 10px;
`;
