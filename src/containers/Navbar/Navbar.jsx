import React from "react";
import Flexbox from "../../components/Flexbox/Flexbox";
import Heading from "../../components/Heading/Heading";
import { Area, Input, NavbarWrapper } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Area>
        <Heading>Savatcha</Heading>
        <Flexbox>
          <input type="search" />
        </Flexbox>

        <Flexbox>
          <button>kirish</button>
          <button>chiqish</button>
        </Flexbox>
      </Area>
    </NavbarWrapper>
  );
};

export default Navbar;
