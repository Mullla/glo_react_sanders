import React from 'react';
/* components */ 
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { ModalItem } from './Components/ModalItem';


function App() {

  // сразу деструктурируем массив из React.useState
  // arr[0] - что изменяется
  // arr[1] - функция, которая обрабатывает изменения
  // openItem содержит данные о товаре, которые открываются в новом окне
  // setOpenItem - назначает товар и запускает перерендер - изменяет стейт и дает команду перерендера, запускается при клике, поэтому передаем в виде пропса в компонент меню
  const [openItem, setOpenItem] = React.useState(null);
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
