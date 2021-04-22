import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from './../../img/logo-img.svg';
import { Btn } from '../Btn/Btn';
import { Context } from '../Functions/context';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 80px;
  width: 100%;
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

const User = styled.div`
  display: flex;
  align-items: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const UserName = styled.span`
  font-size: 14px;
`;

export const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);

  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>Col. Sanders</H1>
      </Logo>
      {authentication ? (
        <User>
          <UserName>{authentication.displayName}</UserName>
          <LogOut title="log out" onClick={logOut}>
            &#10006;
          </LogOut>
        </User>
      ) : (
        <Btn onClick={logIn}>Log In</Btn>
      )}
    </NavBarStyled>
  );
};
