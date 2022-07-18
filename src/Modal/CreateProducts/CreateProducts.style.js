import styled from "styled-components";

export const Form = styled.form`
  width: 400px;
  height: auto;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Inputs = styled.div`
  width: 100%;
  height: 300px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 140px;
  border: none;
  outline: none;
  text-indent: 10px;
`;
