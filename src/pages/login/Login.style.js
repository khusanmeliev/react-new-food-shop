import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 450px;
  height: 400px;
  background-color: #3d3d3b;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px 100px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Inputs = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    width: 90%;
    height: 40px;
    margin: 20px;
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    background-color: inherit;
    color: white;

    ::placeholder {
      color: grey;
    }
    :focus {
      color: white;
      border-bottom: 1px solid black;
    }
  }
`;

export const Button = styled.button`
  width: 30%;
  height: 40px;
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  color: #3d3d3b;
`;
