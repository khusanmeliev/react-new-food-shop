import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

const Button = styled.button`
  width: ${({ wd }) => wd || "100%"};
  height: ${({ hg }) => hg || "35px"};
  background-color: ${colors.button};
  margin: ${({ margin }) => margin};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export default Button;
