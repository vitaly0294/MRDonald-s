import React, { useContext } from "react";
import { Overlay, OrderTitle, Total, TotalPrice, Modal, Text } from "../Style/StyleComponent";
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { totalPriceItems, formatCurrency, projection } from "../Functions/secondoryFunction";
import { ref, set, push } from "firebase/database";
import { Context } from "../Functions/context";

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), 
                        arr => arr.length ? arr : 'no topping'],
  choice: ['choice', item => item ? item : 'no choice']
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));

  // dataBase.ref('orders').push().set({
  //   nameClient: authentication.displayName,
  //   email: authentication.email,
  //   order: newOrder
  // });
  
  set(push(ref(dataBase, 'orders')), {
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder
  })
}

export const OrderConfirm = () => {
  const {
          orders: { orders, setOrders },
          auth: { authentication },
          orderConfirm: { setOpenOrderConfirm },
          firebaseDatabase,
          orderFinal: { orderDelay }
        } = useContext(Context);
        
  const dataBase = firebaseDatabase();
  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Осталось только подтвердить Ваш заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout
          onClick={async () => {
            sendOrder(dataBase, orders, authentication);
            await setOrders([]);
            setOpenOrderConfirm(false);
            orderDelay();
          }}>
            Подтвердить
        </ButtonCheckout>
      </Modal>
    </Overlay>
  )
}