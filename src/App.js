import React from 'react';
/* components */ 
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';


function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu />
    </>
  );
}

export default App;
