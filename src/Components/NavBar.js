import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';


const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
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

const Btn = styled.button`
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: inherit;
  position: relative;
  transition: all 0.4s ease-in-out;
  ::before {
    content: '';
    border: 2px solid #f93af4;
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

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>Col. Sanders</H1>
    </Logo>
    
    <Btn>Войти</Btn>
  </NavBarStyled>
);