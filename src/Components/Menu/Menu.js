import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const Loader = styled.div`
  margin: 20px auto;
  box-sizing: border-box;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  perspective: 800px;
`;

const FirstOrbit = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  left: 0%;
  top: 0%;
  animation: orbit-one-animation 1200ms linear infinite;
  border-bottom: 3px solid #c838f4;

  @keyframes orbit-one-animation {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
`;

const SecondOrbit = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  top: 0%;
  animation: orbit-two-animation 1200ms linear infinite;
  border-right: 3px solid #fff;
  @keyframes orbit-two-animation {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }
`;

const ThirdOrbit = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  bottom: 0%;
  animation: orbit-three-animation 1200ms linear infinite;
  border-top: 3px solid #38c8f4;
  @keyframes orbit-three-animation {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
}

`;

// сразу деструктурируем пропс при передаче
export const Menu = ({ setOpenItem }) => {
  const result = useFetch();

  const dbMenu = result.response;

  return (
    <MenuStyled>
      <Banner />
      {result.response ? (
        <>
          <SectionMenu>
            <h2>Meals</h2>
            <ListItem itemList={dbMenu.meal} setOpenItem={setOpenItem} />
          </SectionMenu>

          <SectionMenu>
            <h2>Snacks & Drinks</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </SectionMenu>
        </>
      ) : result.error ? (
        <div>Sorry, we'll fix it soon </div>
      ) : (
        <Loader>
          <FirstOrbit></FirstOrbit>
          <SecondOrbit></SecondOrbit>
          <ThirdOrbit></ThirdOrbit>
        </Loader>
      )}
    </MenuStyled>
  );
};
