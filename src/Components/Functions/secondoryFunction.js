export const totalPriceItems = order => {
  const countTopping = order.topping && order.topping.filter(item => item.checked).length;
  const priceTopping = (order.price * 0.1)*countTopping;
  return (order.price + priceTopping) * order.count;
};

export const formatCurrency = num => num.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});


//Работа с базой данных
export const projection = rules => {
  const keys = Object.keys(rules);

  return obj => keys.reduce((newObj, key) => {
    console.log('newObj-1:', newObj);
    console.log('key:', key);
    newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null)
    console.log('newObj-2:', newObj);
    return newObj;
  }, {})
};

