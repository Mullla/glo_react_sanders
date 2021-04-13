import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  height: 30px;
  border: none;
  padding: 3px;
`;

const CountBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  font-weight: bold;
  color: ghostwhite;
  border: 1px solid ghostwhite;
  margin: 0 5px;

  :disabled {
    opacity: 0.3;
    &:hover {
      box-shadow: none;
    }
  }

  &:hover {
    box-shadow: -1px -1px 0 1px #121212, -2px -2px 0 2px #c838f4,
      1px 1px 0 1px #121212, 2px 2px 0 2px #38c8f4;
  }
  &:active {
    box-shadow: inset -2px -2px 0 0 #38c8f4, inset 2px 2px 0 0 #c838f4;
  }
`;

export function CountItem({ count, setCount, handlerChange }) {
  return (
    <CountWrapper>
      <span>Quantity</span>
      <div>
        <CountBtn disabled={count <= 1} onClick={() => setCount(count - 1)}>
          -
        </CountBtn>
        <CountInput
          type="number"
          min="1"
          max="100"
          value={count < 1 ? 1 : count}
          onChange={handlerChange}
        />
        <CountBtn disabled={count >= 100} onClick={() => setCount(count + 1)}>
          +
        </CountBtn>
      </div>
    </CountWrapper>
  );
}
