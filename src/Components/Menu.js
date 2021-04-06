import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner />
    <SectionMenu>
      <h2>Meals</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>

    <SectionMenu>
      <h2>Snacks & Drinks</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
);