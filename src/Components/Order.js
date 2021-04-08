import React from 'react';
import styled from 'styled-components';
import { Btn } from './Btn';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
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
`;

const OrderList = styled.ul`

`;

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

export const Order = () => {
  return (
    <OrderStyled>
      <OrderTitle>You ordered: </OrderTitle>

      <OrderContent>
        <OrderList>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </OrderList>

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