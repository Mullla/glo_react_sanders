import React from 'react';
import styled from 'styled-components';

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
  margin-bottom: 20px;
  width: 100%;
`;

const Btn = styled.button`
  padding: 5px 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: inherit;
  position: relative;
  transition: all 0.4s ease-in-out;
  margin-bottom: 25px;
  margin-top: auto;
  ::before {
    content: '';
    border: 2px solid #C838F4;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  ::after {
    content: '';
    border: 2px solid #38c8f4;
    bottom: -2px;
    right: -2px;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  :hover {
    transform: scale(1.1);
    ::before, ::after {
      opacity: 0.4;
    }
  }
`;

const Info = styled.div`
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

export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    // если клик вне модалки т.е. по оверлею, то передаем null в setOpenItem, так окно закроется, потому что openItem будет null
    if(e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if(!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>

      <Modal>
        {/* сюда передается пропс, в стилях он же, поэтому в стилях он деструктурируется и возвращается только img с помощью стрелочной функции */}
        <Banner img={openItem.img}/>
        <Info>
          <Name>{openItem.name}</Name>
          <Price>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</Price>
        </Info>
        <Btn>Добавить</Btn>
      </Modal>

    </Overlay>
  )
};