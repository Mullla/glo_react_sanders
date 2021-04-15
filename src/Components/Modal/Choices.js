import React from 'react';
import { OptionsWrapper, OptionLabel, OptionItem } from './Options';

export const Choices = ({ openItem, choice, changeChoice }) => {
  return (
    <>
      <h3>Choose the option:</h3>
      <OptionsWrapper>
        {openItem.choices.map((item, i) => (
          <OptionLabel key={i}>
            <OptionItem
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              // вызываем функцию checkTopping и передаем туда индекс, который сравнивается с индексом топпинга в массиве
              onChange={changeChoice}
            />
            {item}
          </OptionLabel>
        ))}
      </OptionsWrapper>
    </>
  );
};
