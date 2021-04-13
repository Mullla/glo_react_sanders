import React from 'react';
import styled from 'styled-components';

const ToppingsWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count: 2;
  column-gap: 15px;
`;

const ToppingLabel = styled.label`
  cursor: pointer;
  display: block;
  margin-bottom: 10px;
`;

const ToppingCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;

export const Toppings = ({ toppings, checkTopping }) => {
  return (
    <>
      <h3>Additives</h3>
      <ToppingsWrapper>
        {toppings.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckbox
              type="checkbox"
              checked={item.checked}
              // вызываем функцию checkTopping и передаем туда индекс, который сравнивается с индексом топпинга в массиве
              onChange={() => checkTopping(i)}
            />
            {item.name}
          </ToppingLabel>
        ))}
      </ToppingsWrapper>
    </>
  );
};
