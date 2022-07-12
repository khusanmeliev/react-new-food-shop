import React, { useState } from "react";
import { Form, LoginInput, Wrapper } from "./Login.style";
import Heading from "../../components/Heading/Heading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../../store/user/actions";
import Button from "../../components/Button/Button";

const initialState = {
  phoneNumber: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    localStorage.setItem("userData", JSON.stringify(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values));
    navigate("/");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Heading color="white">Login</Heading>
        <LoginInput
          id="phoneNumber"
          type="tel"
          placeholder="Phone number"
          name="phoneNumber"
          onChange={handleChange}
          value={values.phoneNumber}
        />
        <LoginInput
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <Button wd="100px">Register</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
