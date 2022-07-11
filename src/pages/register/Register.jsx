import React, { useState } from "react";
import { BottomText, Form, Inputs, Wrapper } from "./Register.style";
import Heading from "../../components/Heading/Heading";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const initialState = {
  name: "",
  phone_number: "",
  password: "",
  confirm_password: "",
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

    navigate("/login");
    console.log(values);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Heading color="white">Register</Heading>
        <Inputs>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={values.name}
            autoComplete="off"
            required
            maxLength={12}
            minLength={3}
          />
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
          <input
            id="confirm_password"
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            onChange={handleChange}
            values={values.confirm_password}
            autoComplete="off"
            required
            maxLength={12}
            minLength={6}
          />
        </Inputs>
        <Button>Register</Button>
        <BottomText>
          Akkauntingiz bormi? <a href="/login">Login</a>
        </BottomText>
      </Form>
    </Wrapper>
  );
};

export default Register;
