import React from "react";
import Button from "../../components/Button/Button";
import Flexbox from "../../components/Flexbox/Flexbox";
import Heading from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import { Area, NavbarWrapper } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Area>
        <Heading>Savatcha</Heading>
        <Flexbox wd="50%" hg="100%" alignItems="end">
          <Input type="search" wd="400px" placeholder="qidirish..." />
        </Flexbox>

        <Flexbox
          wd="30%"
          hg="100%"
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button wd="100px">kirish</Button>
        </Flexbox>
      </Area>
    </NavbarWrapper>
  );
};

export default Navbar;
