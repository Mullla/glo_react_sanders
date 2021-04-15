import { useState } from 'react';

export function useCount(openItem) {
  const quantity = openItem.count ? openItem.count : 1;

  // начинаем с 1, чтобы отображался минимум 1 товар
  const [count, setCount] = useState(quantity);

  // при вызове обработчик смены состояния из инпута
  const handlerChange = e => setCount(e.target.value);

  return { count, setCount, handlerChange };
}
