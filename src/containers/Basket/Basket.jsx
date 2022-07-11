import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import {
  decrementProduct,
  incrementProduct,
} from "../../store/product/actions";
import {
  Amount,
  Box,
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

  return (
    <Wrapper>
      <Title>Basket</Title>
      <Cards>
        {products?.map(
          (prod) =>
            prod.added && (
              <>
                <Box>
                  <Image src={prod.pics} />
                  <Name>{prod.name}</Name>
                  <Count>
                    <Button
                      onClick={() =>
                        dispatch(incrementProduct(prod.id, prod.price))
                      }
                    >
                      -
                    </Button>
                    <Text fontSize="25px">{prod.amount}</Text>
                    <Button
                      onClick={() =>
                        dispatch(decrementProduct(prod.id, prod.price))
                      }
                    >
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
          <Button>
            {sum === 0 ? "Biror narsa harid qiling" : "Buyurtma berish"}
          </Button>
        </TotalPrice>
      </Cards>
    </Wrapper>
  );
}

export default Basket;
