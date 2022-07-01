import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CountAmount,
  Image,
  Navbar,
  Price,
  Wrapper,
} from "./Products.style";
import Flexbox from "../components/Flexbox/Flexbox";
import Text from "../components/Text/Text";

function App() {
  const products = useSelector((state) => state.products);
  const sum = useSelector((state) => state.sum);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  const sumOfAmounts = products
    .map((p) => p.amount)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Wrapper>
      <Navbar>
        <h1>Basket: {sumOfAmounts}</h1>
        <h1 style={{ marginRight: "50px" }}>price: {sum}</h1>
      </Navbar>
      {products.map((product) => (
        <Card key={product.id}>
          <Flexbox width="100%" height="20%" gap="10px" flexDirection="row">
            <h3 style={{ gap: "10px" }}>{product.name}</h3>
            <h3> {product.amount}</h3>
          </Flexbox>
          <Image src={product.pics} />

          <Price>
            <h1>{product.price}</h1>
            {product.amount === 0 ? (
              <Button onClick={() => handleAdd(product.id, product.price)}>
                add to cart
              </Button>
            ) : (
              <CountAmount>
                <Button onClick={() => handleRemove(product.id, product.price)}>
                  -
                </Button>
                <Text fontSize="20px">{product.amount}</Text>

                <Button onClick={() => handleAdd(product.id, product.price)}>
                  +
                </Button>
              </CountAmount>
            )}
          </Price>
        </Card>
      ))}
    </Wrapper>
  );
}

export default App;
