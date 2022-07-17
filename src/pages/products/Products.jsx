import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";

import {
  decrementProduct,
  getAllProducts,
  incrementProduct,
} from "../../store/product/actions";

import {
  Card,
  CardImage,
  CountAmount,
  Description,
  Wrapper,
} from "./Products.style";

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
          <CardImage src={product.picture} />
          <Description>
            <Heading size="24px" alignItems="flex-start">
              {product.name}
            </Heading>
            {/* <Text align="start">{product.description}</Text> */}
          </Description>

          <CountAmount>
            <Text fontSize="20px">{product.price} so'm</Text>
            {product.amount === 0 ? (
              <Button
                wd="140px"
                style={{ fontSize: "15px" }}
                onClick={() =>
                  dispatch(incrementProduct(product.id, product.price))
                }
              >
                add to cart
              </Button>
            ) : (
              <>
                <Button
                  wd="40px"
                  onClick={() =>
                    dispatch(decrementProduct(product.id, product.price))
                  }
                >
                  -
                </Button>
                <Text fontSize="15px">{product.amount}</Text>
                <Button
                  wd="40px"
                  onClick={() =>
                    dispatch(incrementProduct(product.id, product.price))
                  }
                >
                  +
                </Button>
              </>
            )}
          </CountAmount>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Products;
