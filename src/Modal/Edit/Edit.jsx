import React from "react";
import Button from "../../components/Button/Button";
import Flexbox from "../../components/Flexbox/Flexbox";
import Heading from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import { Form, Inputs, TextArea } from "./Edit.style";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const Edit = ({ product, modal }) => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <Flexbox flexDirection="row">
        <FaEdit style={{ fontSize: "25px" }} />
        <Heading margin="10px" size="25px">
          Tahrirlash
        </Heading>
      </Flexbox>

      <Inputs>
        <Input
          wd="90%"
          height="100px"
          defaultValue={product.name}
          onChange={handleChange}
          style={{ border: "1px solid black" }}
        />
        <Input
          wd="90%"
          defaultValue={product.price}
          onChange={handleChange}
          style={{ border: "1px solid black" }}
        />
        <TextArea
          rows="10"
          defaultValue={product.description}
          onChange={handleChange}
          style={{ border: "1px solid black" }}
        ></TextArea>
      </Inputs>
      <Flexbox wd="100%" hg="60px">
        <Button wd="50%" hg="40px">
          Save
        </Button>
      </Flexbox>
    </Form>
  );
};

export default Edit;
