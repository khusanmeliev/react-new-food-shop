import React, { useState } from "react";
import { Button, Form, Inputs, Wrapper } from "./Login.style";
import Heading from "../../components/Heading/Heading";

const initialState = {
  phone_number: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
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
