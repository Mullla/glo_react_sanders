import React from 'react';
/* components */
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      {/* передаем в ордер openItem чтобы могли открывать модальное окно */}
      <Order {...orders} {...openItem} />
      {/* с помощью спред-оператора сразу передаем все свойства объекта openItem, функция useOpenItem возвращает объект */}
      <Menu {...openItem} />
      {/* если в объекте openItem будет свойство openItem(то есть возвращает не undefined), тогда вернется ModalItem */}
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
