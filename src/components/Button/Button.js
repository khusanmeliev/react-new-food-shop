import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

const Button = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "35px"};
  background-color: ${colors.button};
  margin: ${({ margin }) => margin};
  border-radius: 4px;
  cursor: pointer;
`;

export default Button;
