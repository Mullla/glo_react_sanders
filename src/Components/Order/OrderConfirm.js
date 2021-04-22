import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Style/Components';
import { OrderTitle, Total, TotalPrice } from '../Style/Components';
import { Btn } from '../Btn/Btn';
import {
  projection,
  countItemsPrice,
  formatCurrency,
} from '../Functions/secondaryFunctions';
import { Context } from '../Functions/context';

const Modal = styled.div`
  background: #121212;
  margin: auto;
  width: 600px;
  padding: 30px;
  text-align: center;
`;

const Heading = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const Span = styled.span`
  text-align: left;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: [
    'topping',
    arr => arr.filter(obj => obj.checked).map(obj => obj.name),
    arr => (arr.length ? arr : 'no options'),
  ],
  choice: ['choice', item => (item ? item : 'no options')],
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref('orders').push().set({
    clientName: authentication.displayName,
    clientEmail: authentication.email,
    order: newOrder,
  });
};

export const OrderConfirm = () => {
  const {
    orders: { orders, setOrders },
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
    firebaseDatabase,
  } = useContext(Context);

  const dataBase = firebaseDatabase();
  const total = orders.reduce(
    (result, order) => countItemsPrice(order) + result,
    0
  );

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Heading>Please, confirm your order</Heading>
        <Total>
          <Span>Total: </Span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <Btn
          onClick={() => {
            sendOrder(dataBase, orders, authentication);
            setOrders([]);
            setOpenOrderConfirm(false);
          }}
        >
          Confirm
        </Btn>
      </Modal>
    </Overlay>
  );
};
