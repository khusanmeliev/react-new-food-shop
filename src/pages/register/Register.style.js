import styled from "styled-components";
import Text from "../../components/Text/Text";
import { Input } from "../../components/Input/Input";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 450px;
  height: 500px;
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

export const RegisterInput = styled(Input)`
  width: 80%;
  height: 40px;
  margin: 10px;
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
`;

export const BottomText = styled(Text)`
  margin-left: 150px;
  font-size: 15px;
  color: grey;

  a {
    color: white;
    text-decoration: none;
    margin: 10px;
  }

  @media (max-width: 600px) {
    margin-left: 100px;
  }
`;
