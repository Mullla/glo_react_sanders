export const formatCurrency = (value) =>
  value.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });

export const countItemsPrice = (order) => order.price * order.count;
