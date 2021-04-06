import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  ${'' /* Функция принимает пропсы, чтобы передать изображение в компонент, сразу деструктурируем ее в img */}
  background-image: ${ ({ img }) => `url(${img})`};
  background-size: cover;                     
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  font-size: 30px;
  z-index: 1;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #121212;
    opacity: 0.4;
    z-index: -1;
  }
  &:hover{
    cursor: pointer;
    box-shadow: 
      inset 0 0 30px 30px rgba(200, 56, 244, 0.3),
      0 0 30px 30px rgba(56, 200, 244, 0.3);
    &::after{
      opacity: 0;
    }
  }
`;

const Span = styled.span`
  background: #121212;
  color: #fff;
  mix-blend-mode: multiply;
  padding: 5px;
  font-size: 20px;
`;


// props деструктурируется 
// т.е. {itemList} заменяет слово props
export const ListItem = ({itemList}) => (
  <List>
    {itemList.map(item => (
      <Item 
      key={item.id}
      img={item.img}
      >
        <Span>{item.name}</Span>
        <p>{item.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
      </Item>
    ))}
  </List>
);