import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Flexbox from "../../components/Flexbox/Flexbox";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";

import {
  decrementProduct,
  getAllProducts,
  incrementProduct,
} from "../../store/product/actions";

import { Card, CountAmount, Image, Wrapper } from "./Products.style";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Wrapper>
      {products?.map((product) => (
        <Card key={product.id}>
          <Image src={product.picture} />
          <Heading size="24px" align="start">
            {product.name}
          </Heading>

          <Text align="start">{product.description}</Text>

          <Flexbox wd="100%" flexDirection="row" justifyContent="space-around">
            <Text fontSize="25px">{product.price} so'm</Text>
            {product.amount === 0 ? (
              <Button
                wd="160px"
                style={{ fontSize: "20px" }}
                onClick={() =>
                  dispatch(incrementProduct(product.id, product.price))
                }
              >
                add to cart
              </Button>
            ) : (
              <CountAmount>
                <Button
                  wd="40px"
                  style={{ fontSize: "20px" }}
                  onClick={() =>
                    dispatch(decrementProduct(product.id, product.price))
                  }
                >
                  -
                </Button>
                <Text fontSize="20px">{product.amount}</Text>
                <Button
                  wd="40px"
                  style={{ fontSize: "20px" }}
                  onClick={() =>
                    dispatch(incrementProduct(product.id, product.price))
                  }
                >
                  +
                </Button>
              </CountAmount>
            )}
          </Flexbox>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Products;
