import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../../../components/Heading/Heading";
import { getAllOrders } from "../../../store/order/actions";
import { getHour } from "../../../utils/dateUtils";
import { Table, Wrapper } from "./Orders.style";

const getOrderAsString = (products) => {
  return products.map(
    (product) => `${product.amount}ta ${product.product.name}, `
  );
};

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <Wrapper>
      <Heading>Ovqatlar ro'yxati</Heading>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Ismi</th>
            <th>Narxi</th>
            <th>Vaqti</th>
            <th>Ma'lumotlar</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>{order.user.username}</td>
              <td>{order.totalPrice}</td>
              <td>{getHour(order.createdAt)}</td>
              <td>{getOrderAsString(order.products)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Orders;
