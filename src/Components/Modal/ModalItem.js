import React from 'react';
import styled from 'styled-components';
// * Components
import { Btn } from '../Btn/Btn';
import { CountItem } from '../Modal/CountItem';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
// * Hooks
import { useCount } from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
// * functions
import {
  formatCurrency,
  countItemsPrice,
} from '../Functions/secondaryFunctions';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Modal = styled.div`
  margin: auto;
  background: #121212;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 5px solid transparent;
  border-image: linear-gradient(
    to right bottom,
    #c838f4 0%,
    #c838f4 20%,
    transparent 20%,
    transparent 80%,
    #38c8f4 80%,
    #38c8f4 100%
  );
  border-image-slice: 1;
  border-image-outset: 20px;
`;

const Banner = styled.div`
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin: -5px;
  margin-bottom: 20px;
  width: 102%;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px;
  width: 100%;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
`;

const Name = styled.p`
  ${'' /* margin: 0 15px; */}
  font-weight: bold;
  font-size: 24px;
`;

const Price = styled.p`
  ${'' /* margin: 0 15px; */}
  font-weight: bold;
  font-size: 24px;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;
`;

const CloseBtn = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  background: transparent;
  top: -40px;
  right: -40px;
  border: none;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 30px;
    left: 50%;
    background: #38c8f4;
    height: 2px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 30px;
    left: 50%;
    background: #c838f4;
    height: 2px;
  }
  &:hover {
    ::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    ::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  // подключаю хук, у которого есть состояние, функция: которая обрабатывает состояние и обработчик onChange
  const counter = useCount(openItem.count);
  // топпинги конкретного блюда
  // объект
  const itemToppings = useToppings(openItem);
  const itemChoices = useChoices(openItem);
  // нужно чтобы было true, у первого элемента индекс 0
  // если открывать модалку не из списка заказов, то индекса вообще не будет
  const isEdit = openItem.index > -1;

  const closeModal = e => {
    // если клик вне модалки т.е. по оверлею, то передаем null в setOpenItem, так окно закроется, потому что openItem будет null
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    // сохраняем все свойства openItem
    ...openItem,
    // берется значение из хука useCount
    count: counter.count,
    // берется значение из объекта из useToppings
    topping: itemToppings.toppings,
    choice: itemChoices.choice,
  };

  const editOrder = () => {
    const newOrder = [...orders];
    // находим заказ, который хотим редактировать в newOrder
    // этот заказ мы и прописываем в order
    newOrder[openItem.index] = order;
    setOrders(newOrder);
    setOpenItem(null);
  };

  const addToOrder = () => {
    // передаем старые заказы, которые были[...orders], и добавляем новый заказ из order
    setOrders([...orders, order]);
    // чтобы закрылось модальное окно
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        {/* сюда передается пропс, в стилях он же, поэтому в стилях он деструктурируется и возвращается только img с помощью стрелочной функции */}
        <Banner img={openItem.img} />
        <Content>
          <ItemInfo>
            <Name>{openItem.name}</Name>
            <Price>{formatCurrency(openItem.price)}</Price>
          </ItemInfo>
          <CountItem {...counter} />
          {/* рендерить только если они есть */}
          {openItem.toppings && <Toppings {...itemToppings} />}
          {openItem.choices && (
            <Choices {...itemChoices} openItem={openItem}></Choices>
          )}
          <TotalPriceItem>
            <span>Total price: </span>
            <span>{formatCurrency(countItemsPrice(order))}</span>
          </TotalPriceItem>
          <Btn
            // проверяем, откуда кликнули и в зависимости от этого вызываем функцию
            onClick={isEdit ? editOrder : addToOrder}
            // запрет добавления товара, если опции есть, но не были выбраны
            disabled={order.choices && !order.choice}
          >
            {isEdit ? 'Edit' : 'Add'}
          </Btn>
        </Content>
      </Modal>
    </Overlay>
  );
};
