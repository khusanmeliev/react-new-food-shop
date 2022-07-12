import styled from "styled-components";
import Flexbox from "../../components/Flexbox/Flexbox";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled(Flexbox)`
  width: 350px;
  height: 360px;
  border: 2px solid black;
  margin: 30px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CountAmount = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 60%;
`;
