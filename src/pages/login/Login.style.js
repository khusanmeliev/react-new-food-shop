import styled from "styled-components";
import { Input } from "../../components/Input/Input";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 430px;
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

export const LoginInput = styled(Input)`
  width: 70%;
  height: 40px;
  margin: 20px;
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
`;

