import React, { useState } from "react";
import { Button, Form, Inputs, Wrapper } from "./Register.style";
import Heading from "../../components/Heading/Heading";

const initialState = {
  name: "",
  phone_number: "",
  password: "",
  confirm_password: "",
};

const Register = () => {
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
            maxLength={13}
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
      </Form>
    </Wrapper>
  );
};

export default Register;
