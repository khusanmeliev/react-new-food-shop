import React from "react";
import Heading from "../../components/Heading/Heading";
import { Form, Inputs, TextArea } from "./CreateProducts.style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Flexbox from "../../components/Flexbox/Flexbox";
import { Input } from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const CreateProducts = () => {
  return (
    <Form>
      <Flexbox flexDirection="row">
        <AiOutlinePlusCircle style={{ fontSize: "25px" }} />
        <Heading size="25px">Mahsulot yaratish</Heading>
      </Flexbox>
      <Inputs>
        <Input wd="90%" placeholder="Name" />
        <Input wd="90%" placeholder="Pric" />
        <Input wd="90%" placeholder="Photo" />
        <TextArea rows="10" placeholder="Description"></TextArea>
      </Inputs>
      <Button wd="90%" size="25px">
        Create
      </Button>
    </Form>
  );
};

export default CreateProducts;
