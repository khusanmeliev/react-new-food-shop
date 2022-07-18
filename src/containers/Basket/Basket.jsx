import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BasketPart, Wrapper } from "./Basket.style";
import Heading from "../../components/Heading/Heading";
import { StyledLink } from "../../pages/Dashboard/Sidebar/Sidebar.style";

function Basket() {
  return (
    <Wrapper>
      <BasketPart>
        <StyledLink to="/products">
          <FiShoppingCart style={{ color: "blue", fontSize: "25px" }} />
        </StyledLink>
        <Heading margin="10px">Savat</Heading>
      </BasketPart>
    </Wrapper>
  );
}

export default Basket;
