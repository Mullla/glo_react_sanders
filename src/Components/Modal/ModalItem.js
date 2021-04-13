import React from 'react';
import styled from 'styled-components';
// * Components
import { Btn } from '../Btn/Btn';
import { CountItem } from '../Modal/CountItem';
import { Toppings } from './Toppings';
// * Hooks
import { useCount } from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
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

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  // подключаю хук, у которого есть состояние, функция: которая обрабатывает состояние и обработчик onChange
  const counter = useCount();
  // топпинги конкретного блюда
  // объект
  const itemToppings = useToppings(openItem);

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
          <TotalPriceItem>
            <span>Total price: </span>
            <span>{formatCurrency(countItemsPrice(order))}</span>
          </TotalPriceItem>
          <Btn onClick={addToOrder}>Add</Btn>
        </Content>
      </Modal>
    </Overlay>
  );
};
