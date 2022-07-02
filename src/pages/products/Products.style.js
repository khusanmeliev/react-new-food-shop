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

export const Navbar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 100px;

  @media (max-width: 400px) {
    gap: 20px;
    font-size: 10px;
  }
`;

export const Card = styled(Flexbox)`
  width: 350px;
  height: 360px;
  border: 2px solid black;
  margin: 30px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 8px;
`;

export const CountAmount = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 25px;
  }
  button {
    width: 60px;
    font-size: 20px;
  }
`;

export const Price = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Image = styled.img`
  width: 100%;
  height: 60%;
`;
