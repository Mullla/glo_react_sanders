import React from 'react';
import styled from 'styled-components';
import { Btn } from '../Btn/Btn';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  background: #121212;
  border-right: 2px solid ghostwhite;
  min-width: 380px;
  height: calc(100% - 80px);
  z-index: 2;
  box-shadow: 
    inset -2px 0 0 0 #C838F4,
    2px 0 0 0 #38c8f4,
    7px 0 7px rgba(248,248,255, .25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child{
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
  return (
    <OrderStyled>
      <OrderTitle>You ordered: </OrderTitle>

      <OrderContent>
      {/* проверяем есть ли заказы в списке заказов, если да, то отображаются компоненты, если нет, то надпись, что списко заказов пуст */}
        {orders.length ? 
          <OrderList>
            { orders.map(order => <OrderListItem order={order}/>) }
          </OrderList> : 
        <EmptyList>List of orders is empty</EmptyList>}

        <Total>
          <span>Total:</span>
          <span>5</span>
          <TotalPrice>850 ₽</TotalPrice>
        </Total>

        <Btn>Оформить</Btn>
      </OrderContent>
    </OrderStyled>
  );
};