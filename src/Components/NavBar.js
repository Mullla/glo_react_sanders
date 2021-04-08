import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
import { Btn } from './Btn';


const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 26px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 60px;
`;


export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>Col. Sanders</H1>
    </Logo>
    
    <Btn>Войти</Btn>
  </NavBarStyled>
);