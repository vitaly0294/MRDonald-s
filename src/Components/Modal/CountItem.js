import React, { useContext } from "react";
import styled from 'styled-components';
import { ContextItem } from "../Functions/contextItem";

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
`;

const ButtonCount = styled.button`
  bacground-color: transparent;
`;

export const CountItem = () => {

  const { 
    counter: { count, setCount, onChange } 
  } = useContext(ContextItem);

  return (
    <CountWrapper>
      <span>Колличество</span>
      <div>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
        <CountInput type='number' 
                    min='1' 
                    max='100'
                    value={count < 1 ? 1 : count}
                    onChange={onChange}/>
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </div>
    </CountWrapper>
  )
}