import styled from "styled-components";

const Flexbox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
`;

export default Flexbox;
