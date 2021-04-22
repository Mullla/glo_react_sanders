import React, { useContext } from 'react';
import styled from 'styled-components';
import { Btn } from '../Btn/Btn';
import { OrderListItem } from './OrderListItem';
import { OrderTitle, Total, TotalPrice } from '../Style/Components';
import {
  countItemsPrice,
  formatCurrency,
} from '../Functions/secondaryFunctions';
import { Context } from '../Functions/context';

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

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = () => {
  const {
    orders: { orders, setOrders },
    openItem: { setOpenItem },
    auth: { authentication, logIn },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  // функция перебора всех элементов, чтобы посчитать стоимость
  const total = orders.reduce(
    (result, order) => countItemsPrice(order) + result,
    0
  );

  const totalCounter = orders.reduce(
    (result, order) => order.count + result,
    0
  );

  const deleteItem = index => {
    // клпируем массив с заказами в новый массив
    const newOrder = [...orders];
    // удаляем из нового массива элемент по индексу
    newOrder.splice(index, 1);
    // меняем заказ на newOrder с помощью setOrders
    setOrders(newOrder);

    // * можно сделать через фильтр
    /* 
      code: 
      // если индекс элемента не равен удаляемому, то возвращаем его в newOrder
      const newOrder = orders.filter((item, i) => index !== i);
      setOrders(newOrder);
    */
  };

  return (
    <OrderStyled>
      <OrderTitle>You ordered: </OrderTitle>

      <OrderContent>
        {/* проверяем есть ли заказы в списке заказов, если да, то отображаются компоненты, если нет, то надпись, что списко заказов пуст */}
        {orders.length ? (
          <OrderList>
            {orders.map((order, index) => (
              <OrderListItem
                order={order}
                key={index}
                deleteItem={deleteItem}
                index={index}
                setOpenItem={setOpenItem}
              />
            ))}
          </OrderList>
        ) : (
          <EmptyList>List of orders is empty</EmptyList>
        )}
      </OrderContent>

      {orders.length ? (
        <>
          <Total>
            <span>Total:</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </Total>

          <Btn
            onClick={() => {
              if (authentication) {
                setOpenOrderConfirm(true);
              } else {
                logIn();
              }
            }}
          >
            Order
          </Btn>
        </>
      ) : (
        ''
      )}
    </OrderStyled>
  );
};
