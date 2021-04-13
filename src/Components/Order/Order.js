import React from 'react';
import styled from 'styled-components';
import { Btn } from '../Btn/Btn';
import { OrderListItem } from './OrderListItem';
import {
  countItemsPrice,
  formatCurrency,
} from '../Functions/secondaryFunctions';

const OrderStyled = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  background: #121212;
  border-right: 2px solid ghostwhite;
  min-width: 380px;
  max-width: 25vw;
  height: calc(100% - 80px);
  z-index: 2;
  box-shadow: inset -2px 0 0 0 #c838f4, 2px 0 0 0 #38c8f4,
    7px 0 7px rgba(248, 248, 255, 0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  margin-top: auto;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  margin-left: 20px;
  min-width: 65px;
  font-weight: 700;
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders }) => {
  // функция перебора всех элементов, чтобы посчитать стоимость
  const total = orders.reduce(
    (result, order) => countItemsPrice(order) + result,
    0
  );

  const totalCounter = orders.reduce(
    (result, order) => order.count + result,
    0
  );

  return (
    <OrderStyled>
      <OrderTitle>You ordered: </OrderTitle>

      <OrderContent>
        {/* проверяем есть ли заказы в списке заказов, если да, то отображаются компоненты, если нет, то надпись, что списко заказов пуст */}
        {orders.length ? (
          <OrderList>
            {orders.map(order => (
              <OrderListItem order={order} key={order.id} />
            ))}
          </OrderList>
        ) : (
          <EmptyList>List of orders is empty</EmptyList>
        )}
      </OrderContent>

      <Total>
        <span>Total:</span>
        <span>{totalCounter}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>

      <Btn>Order</Btn>
    </OrderStyled>
  );
};
