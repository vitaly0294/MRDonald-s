import React, { useContext } from "react";
import styled from 'styled-components';
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems, formatCurrency } from "../Functions/secondoryFunction";
import { OrderTitle, Total, TotalPrice  } from "../Style/StyleComponent";
import { Context } from "../Functions/context";


const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-width: 380px;
  max-width: 380px;
  max-height: 1000px;
  height: calc(100% - 80px); 
  box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
  padding: 20px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = () => {
  
  const { orders: { orders, setOrders }, 
          auth: { logIn, authentication },
          orderConfirm: { setOpenOrderConfirm } 
        } = useContext(Context);

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const totalCounter = orders.reduce((result, order) => order.count + result, 0);

  const deleteItem = index => {
    const newOrders = orders.filter((item, i) => index !== i);
    setOrders(newOrders);
  }

  const checkout = () => authentication ? setOpenOrderConfirm(true) : logIn();

  return (
    <OrderStyled>
      <OrderTitle> ВАШ ЗАКАЗ </OrderTitle>

      <OrderContent>
        {orders.length ? 
          <OrderList>
            {
              orders.map((order, index) => <OrderListItem 
                      order={order} 
                      deleteItem={deleteItem} 
                      index={index} 
                      key={index}/>)
            }
          </OrderList> :
          <EmptyList>Список заказов пуст</EmptyList>
        }
      </OrderContent>

      {orders.length 
        ?
          <>
            <Total>
              <span>Итого</span>
              <span>{totalCounter}</span>
              <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout 
              onClick={checkout}
              disabled={!orders.length}> 
                Оформить
            </ButtonCheckout>
          </>
        :
        null
      }
    </OrderStyled>
  )
}