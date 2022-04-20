import { useState } from "react";

const getTopping = toppings => toppings.map(item => ({ //из массива допов получаем массив с объектами
  name: item,
  checked: false
}));

export function useToppings(openItem) {
  const readyTopping = openItem.topping ? openItem.topping :
    openItem.toppings ? getTopping(openItem.toppings) : [];
  const [toppings, setToppings] = useState(readyTopping);

  
  const checkToppings = index => {
    setToppings(toppings.map((item, i) => {
      if (i === index) {
        item.checked = !item.checked;
      }
      return item;
    }));
  }

  return { toppings, checkToppings };
}