import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
/* components */
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { Context } from './Components/Functions/context';
/* hooks */
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';

const firebaseConfig = {
  apiKey: 'AIzaSyBLcULVxhZYGx4FAOmI4NwHBBvfcrRz-OY',
  authDomain: 'colonel-sanders.firebaseapp.com',
  databaseURL:
    'https://colonel-sanders-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'colonel-sanders',
  storageBucket: 'colonel-sanders.appspot.com',
  messagingSenderId: '350911950422',
  appId: '1:350911950422:web:44c3056bdda07a498a15f7',
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider
      value={{
        auth,
        openItem,
        orders,
        orderConfirm,
        firebaseDatabase: firebase.database,
      }}
    >
      <GlobalStyle />
      <NavBar />
      {/* передаем в ордер openItem чтобы могли открывать модальное окно */}
      <Order />
      {/* с помощью спред-оператора сразу передаем все свойства объекта openItem, функция useOpenItem возвращает объект */}
      <Menu />
      {/* если в объекте openItem будет свойство openItem(то есть возвращает не undefined), тогда вернется ModalItem */}
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
