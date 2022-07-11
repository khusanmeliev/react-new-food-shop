import React, { useState } from "react";
import { Button, Form, Inputs, Wrapper } from "./Login.style";
import Heading from "../../components/Heading/Heading";
import authApi from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";

const initialState = {
  phone_number: "",
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
    authApi
      .login(values)
      .then((res) => {
        localStorage.setItem("token", res.data.user.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({ type: "LOGIN", payload: res.data.user });
        navigate("/");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Heading color="white">Login</Heading>
        <Inputs>
          <input
            id="phone_number"
            type="tel"
            placeholder="Phone number"
            name="phone_number"
            onChange={handleChange}
            value={values.phone_number}
            autoComplete="off"
            required
            maxLength={17}
            minLength={9}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={values.password}
            autoComplete="off"
            required
            maxLength={12}
            minLength={6}
          />
        </Inputs>
        <Button>Register</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
