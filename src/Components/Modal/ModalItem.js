import React, { useContext } from "react";
import styled from 'styled-components';
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";
import { totalPriceItems, formatCurrency } from "../Functions/secondoryFunction";
import { Toppings } from "./Toppings";
import { useToppings } from "../Hooks/useTopping";
import { Choices } from "./Choices";
import { useChoices } from "../Hooks/useChoices";
import { Overlay } from "../Style/StyleComponent";
import { Context } from "../Functions/context";
import { ContextItem } from "../Functions/contextItem";

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 40px;
  height: calc(100% - 240px);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Pacifico';
  font-weight: 400;
  font-size: 30px;
  line-height: 53px;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = () => {

  const { openItem: { openItem, setOpenItem },
          orders: { orders, setOrders }
  } = useContext(Context);


  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);

  const isEdit = openItem.index > -1;

  const closeModal = e => {
    if(e.target.id === 'overlay') setOpenItem(null);
  }

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  }

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  return (
    <ContextItem.Provider value ={{
      counter,
      toppings,
      choices,
      openItem
    }}>
      <Overlay id="overlay" onClick={closeModal}>

        <Modal>
          <Banner img={openItem.img}/>

          <Content>

            <HeaderContent>
              <p>{openItem.name}</p>
              <p>{formatCurrency(openItem.price)}</p>
            </HeaderContent>

            <CountItem/>

            {openItem.toppings && <Toppings/>}
            {openItem.choices && <Choices/>}
            
            <TotalPriceItem>
              <span>Цена:</span>
              <span>{formatCurrency(totalPriceItems(order))}</span>
            </TotalPriceItem>

            <ButtonCheckout 
              onClick={isEdit ? editOrder : addToOrder}
              disabled={order.choices && !order.choice}
            >{isEdit ? 'Редактировать' : 'Добавить'}</ButtonCheckout>

          </Content>

        </Modal>

      </Overlay>
    </ContextItem.Provider>
  )
};