import React, { useContext } from "react";
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from "../Functions/secondoryFunction";
import { Context } from "../Functions/context";

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const Prodact = styled.div`
  display: flex;
  margin: 15px 0 5px;
`;

const Toppings = styled.div`
  font-size: 14px;
  line-height: 16px;

  color: #9A9A9A;
`;

const OrderItemStyled = styled.li`
  cursor: pointer;
`;

const TrashBatton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;


export const OrderListItem = ({ order, deleteItem, index}) => {

  const {
    openItem: { setOpenItem }
  } = useContext(Context);
  
  const topping = order.topping.filter(item => item.checked)
                                .map(item => item.name)
                                .join(', ')
                                .toLowerCase();

  const refDeleteButton = React.useRef(null); // Вариант 2 OrderItemStyled и TrashBatton

  return (
      // <OrderItemStyled onClick={() => setOpenItem({...order, index})}> // Мой вариант 1

      <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
        <Prodact>
          <ItemName>{order.name} {order.choice}</ItemName>
          <span>{order.count}</span>
          <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>

          {/* <TrashBatton onClick={(e) => {e.stopPropagation();   //Мой вариант 1
                                        deleteItem(index)}}/> */}

          <TrashBatton ref={refDeleteButton} onClick={(e) => {deleteItem(index)}}/> 
        </Prodact> 

        {topping && <Toppings>{topping}</Toppings>}

      </OrderItemStyled>
  ) 
};