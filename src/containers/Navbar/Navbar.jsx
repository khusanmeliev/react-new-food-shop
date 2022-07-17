import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Flexbox from "../../components/Flexbox/Flexbox";
import Heading from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import { Area, NavbarWrapper } from "./Navbar.style";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <NavbarWrapper>
      <Area>
        <Heading style={{ color: "white" }}>Savatcha</Heading>
        <Input type="search" wd="400px" placeholder="qidirish..." />

        {isLoggedIn === true ? (
          ""
        ) : (
          <Flexbox
            wd="30%"
            hg="100%"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Link to={"/login"}>
              <Button wd="100px">kirish</Button>
            </Link>
          </Flexbox>
        )}
      </Area>
    </NavbarWrapper>
  );
};

export default Navbar;
