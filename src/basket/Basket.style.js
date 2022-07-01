import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;

  @media (max-width: 350px) {
    height: auto;
  }
`;

export const Title = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  letter-spacing: 2px;
  font-weight: 700;
  background-color: black;
  color: white;
  border-bottom: 2px solid white;

  @media (max-width: 350px) {
    width: 100%;
    font-size: 30px;
  }
`;

export const Box = styled.div`
  width: 95%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: white;

  @media (max-width: 350px) {
    width: 90%;
    height: 400px;
    flex-direction: column;
    border-radius: 8px;
  }
`;

export const Image = styled.img`
  width: 20%;
  height: 100%;
  background-color: pink;

  @media (max-width: 350px) {
    width: 100%;
    height: 200px;
    border-radius: 8px 8px 0px 0px;
  }
`;
export const Name = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 350px) {
    width: 100%;
    height: auto;
  }
`;

export const Count = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  @media (max-width: 350px) {
    width: 70%;
    height: 20%;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 40px;
  font-size: 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  outline: none;
`;

export const Amount = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 30px;
  font-weight: 700;

  p {
    margin: 20px;
  }

  @media (max-width: 350px) {
    width: 100%;
    justify-content: center;
  }
`;

export const TotalPrice = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  color: white;

  button {
    width: 300px;
    height: 50px;
    font-size: large;
    cursor: pointer;
    background-color: white;
    color: black;
    border: none;
    border-radius: 8px;
  }

  @media (max-width: 350px) {
    text-align: center;
    font-size: 15px;

    button {
      width: 90%;
    }
  }
`;

export const Cards = styled.div`
  width: 80%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 350px) {
    width: 100%;
  } ;
`;
