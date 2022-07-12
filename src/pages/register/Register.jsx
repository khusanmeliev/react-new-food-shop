import React, { useState } from "react";
import {
  BottomText,
  Form,
  Inputs,
  RegisterInput,
  Wrapper,
} from "./Register.style";
import Heading from "../../components/Heading/Heading";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import authApi from "../../api/authApi";

const initialState = {
  username: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    localStorage.setItem("userData", JSON.stringify(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authApi
      .register(values)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Heading color="white">Register</Heading>
        <RegisterInput
          id="username"
          type="text"
          placeholder="Name"
          name="username"
          onChange={handleChange}
          value={values.username}
        />
        <RegisterInput
          id="phoneNumber"
          type="tel"
          placeholder="Phone number"
          name="phoneNumber"
          onChange={handleChange}
          value={values.phoneNumber}
        />
        <RegisterInput
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <RegisterInput
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          values={values.confirmPassword}
        />
        <Button wd="30%" hg="40px">
          Register
        </Button>
        <BottomText>
          Akkauntingiz bormi? <a href="/login">Login</a>
        </BottomText>
      </Form>
    </Wrapper>
  );
};

export default Register;
