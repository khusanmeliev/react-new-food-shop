import React, { useState } from "react";
import { Form, LoginInput, Wrapper } from "./Login.style";
import Heading from "../../components/Heading/Heading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import Button from "../../components/Button/Button";
import authApi from "../../api/authApi";

const initialState = {
  phoneNumber: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authApi
      .login(values)
      .then((res) => {
        localStorage.setItem("token", res.data.user.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({ type: "LOGIN", payload: res.data.user });
        alert("", `${res.data.message}`, "success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => alert("", `${err.response.data.message}`, "error"));
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
        <Button wd="100px">Login</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
