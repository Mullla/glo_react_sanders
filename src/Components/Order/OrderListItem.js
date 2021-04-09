import React from 'react';
import styled from 'styled-components';
import trashImage from './../../img/trash.svg';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const DeleteBtn = styled.button`
  background: url(${trashImage}) no-repeat center / cover;
  width: 30px;
  height: 30px;
  border-color: transparent;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
  font-weight: 700;
`;

export const OrderListItem = ({ order }) => (
  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <span>11</span>
    <ItemPrice>{order.price.toLocaleString('ru-RU', 
                { style: 'currency', currency: 'RUB'})}</ItemPrice>
    <DeleteBtn />
  </OrderItemStyled>
);