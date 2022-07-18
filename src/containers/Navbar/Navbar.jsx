import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Flexbox from "../../components/Flexbox/Flexbox";
import Basket from "../Basket/Basket";
import { NavbarWrapper } from "./Navbar.style";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <NavbarWrapper>
      <Basket />
      {isLoggedIn ? (
        ""
      ) : (
        <Flexbox
          wd="30%"
          hg="100%"
          flexDirection="row"
          justifyContent="space-around"
        >
          <Link to={"/login"}>
            <Button primary wd="100px">
              kirish
            </Button>
          </Link>
        </Flexbox>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
