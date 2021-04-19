import { useState } from 'react';

export function useCount(quantity) {
  // начинаем с 1, чтобы отображался минимум 1 товар
  const [count, setCount] = useState(quantity || 1);

  // при вызове обработчик смены состояния из инпута
  const handlerChange = e => setCount(e.target.value);

  return { count, setCount, handlerChange };
}
