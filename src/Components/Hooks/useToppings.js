import { useState } from 'react';

// переводим из массива со строками в массив с объектами
const getToppings = toppings => {
  if (toppings) {
    return toppings.map(item => ({
      name: item,
      checked: false,
    }));
  } else {
    return [];
  }
};

// можно сделать проверку на наличие топпингов не в функции, а создать переменную, ее передавать в useState
/* 
  code: 
  const readyTopping = openItem.toppings ? getToppings(openItem.toppings) : [];
*/
export function useToppings(openItem) {
  // мы не имеем права менять стейт
  // с хуками можно
  const [toppings, setToppings] = useState(getToppings(openItem.toppings));

  // при клике на один их допов меняет значение
  // берем индекс топпинга, на котором кликнули
  // вызываем хук и возвращаем туда новый массив
  // для этого перебираем массив с топпингами
  const checkTopping = index => {
    setToppings(
      // item - объект, хранится в виде ссылки на объект
      // даже когда создаем массив с обхектами - это будет тот же объект просто будет доступен еще и по новой ссылке
      toppings.map((item, i) => {
        // если индекс элемента, по которому кликнули совпадает с индексом перебираемого массива, то меняем false на true и наоборот
        if (i === index) {
          item.checked = !item.checked;
        }

        // возвращаем item в любом случае
        return item;

        // * для иммутабельности (неизменности объекта) надо создать копию item
        // const newItem = {...item}
        // if (i === index) {
        //   newItem.checked = !newItem.checked;
        // }

        // return newItem;
      })
    );
  };

  // setToppings не нужен, тк он используется только внутри checkTopping
  return { toppings, checkTopping };
}
