import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Flexbox from "../../components/Flexbox/Flexbox";
import Text from "../../components/Text/Text";
import {
  decrementProduct,
  getAllProducts,
  incrementProduct,
} from "../../store/product/actions";
import { Card, CountAmount, Image, Price, Wrapper } from "./Products.style";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Wrapper>
      {products?.map((product) => (
        <Card key={product.id}>
          <Flexbox width="100%" height="20%" gap="10px" flexDirection="row">
            <h3 style={{ gap: "10px" }}>{product.name}</h3>
            <h3> {product.amount}</h3>
          </Flexbox>
          <Image src={product.pics} />

          <Price>
            <h1>{product.price}</h1>
            {product.amount === 0 ? (
              <Button
                onClick={() =>
                  dispatch(incrementProduct(product.id, product.price))
                }
              >
                add to cart
              </Button>
            ) : (
              <CountAmount>
                <Button
                  onClick={() =>
                    dispatch(decrementProduct(product.id, product.price))
                  }
                >
                  -
                </Button>
                <Text fontSize="20px">{product.amount}</Text>

                <Button
                  onClick={() =>
                    dispatch(incrementProduct(product.id, product.price))
                  }
                >
                  +
                </Button>
              </CountAmount>
            )}
          </Price>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Products;
