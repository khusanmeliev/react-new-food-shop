import styled from "styled-components";

const Flexbox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default Flexbox;
