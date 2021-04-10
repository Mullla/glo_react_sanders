import React from 'react';
import styled from 'styled-components';
import { Btn } from '../Btn/Btn';

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
  border-image: linear-gradient(to right bottom, #C838F4 0%, #C838F4 20%, transparent 20%, transparent 80%, #38c8f4 80%, #38c8f4 100%);
  border-image-slice: 1;
  border-image-outset: 20px;
`;

const Banner = styled.div`
  height: 200px;
  background-image: url(${ ({ img }) => img});
  background-size: cover;
  background-position: center;
  margin: -5px;
  margin-bottom: 20px;
  width: 102%;
`;

const Info = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p`
  margin: 0 15px;
`;

const Price = styled.p`
  margin: 0 15px;
  font-weight: bold;
  font-size: 24px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const closeModal = e => {
    // если клик вне модалки т.е. по оверлею, то передаем null в setOpenItem, так окно закроется, потому что openItem будет null
    if(e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  const order = {
    // сохраняем все свойства openItem
    ...openItem
  };

  const addToOrder = () => {
    // передаем старые заказы, которые были[...orders], и добавляем новый заказ из order
    setOrders([...orders, order]);
    // чтобы закрылось модальное окно
    setOpenItem(null);
  }


  return (
    <Overlay id="overlay" onClick={closeModal}>

      <Modal>
        {/* сюда передается пропс, в стилях он же, поэтому в стилях он деструктурируется и возвращается только img с помощью стрелочной функции */}
        <Banner img={openItem.img}/>
        <Info>
          <Name>{openItem.name}</Name>
          <Price>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</Price>
        </Info>
        <Btn onClick={addToOrder}>Add</Btn>
      </Modal>

    </Overlay>
  )
};