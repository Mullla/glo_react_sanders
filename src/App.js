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
/* hooks */
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDB } from './Components/Hooks/useDB';

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
  const database = firebase.database();
  useTitle(openItem.openItem);
  const dbMenu = useDB(database);

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      {/* передаем в ордер openItem чтобы могли открывать модальное окно */}
      <Order {...orders} {...openItem} {...auth} database={database} />
      {/* с помощью спред-оператора сразу передаем все свойства объекта openItem, функция useOpenItem возвращает объект */}
      <Menu {...openItem} dbMenu={dbMenu} />
      {/* если в объекте openItem будет свойство openItem(то есть возвращает не undefined), тогда вернется ModalItem */}
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
