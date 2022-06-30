import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Text from "../components/Text/Text";
import {
  Amount,
  Box,
  Button,
  Cards,
  Count,
  Image,
  Name,
  Title,
  TotalPrice,
  Wrapper,
} from "./Basket.style";

function Basket() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const sum = useSelector((state) => state.sum);

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  return (
    <Wrapper>
      <Title>Basket</Title>
      <Cards>
        {products.map(
          (prod) =>
            prod.added && (
              <>
                <Box>
                  <Image src={prod.pics} />
                  <Name>{prod.name}</Name>
                  <Count>
                    <Button onClick={() => handleRemove(prod.id, prod.price)}>
                      -
                    </Button>
                    <Text fontSize="25px">{prod.amount}</Text>
                    <Button onClick={() => handleAdd(prod.id, prod.price)}>
                      +
                    </Button>
                  </Count>
                  <Amount>
                    <p>{prod.price} - so'm</p>
                  </Amount>
                </Box>
              </>
            )
        )}

        <TotalPrice>
          <h1>Total Price - {sum} so'm</h1>
          <button>
            {sum === 0 ? "Biror narsa harid qiling" : "Buyurtma berish"}
          </button>
        </TotalPrice>
      </Cards>
    </Wrapper>
  );
}

export default Basket;
