import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 300px;
  height: auto;
  margin: 30px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CardImage = styled.img`
  width: 95%;
  height: 200px;
  border-radius: 8px 8px 0px 0px;
`;

export const Description = styled.div`
  width: 95%;
  height: 70px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const CountAmount = styled.div`
  width: 95%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
