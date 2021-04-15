import { useState } from 'react';

export function useChoices() {
  const [choice, setChoice] = useState();

  function changeChoice(e) {
    // будем кликать по радио-кнопкам, забирать value и передавать
    setChoice(e.target.value);
  }

  return { choice, changeChoice };
}
