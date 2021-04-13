export const formatCurrency = value =>
  value.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });

export const countItemsPrice = order => {
  // получаем новый массив с теми топпингами, которые выбрали, и бурем его длину - количество выбранных топпингов
  // будем вызывать эту функцию только если у блюда есть топпинги
  const countToppings =
    order.topping && order.topping.filter(item => item.checked).length;

  // стоимость одного топпинга
  const toppingPrice = order.price * 0.1 * countToppings;

  return (order.price + toppingPrice) * order.count;
};
