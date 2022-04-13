import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1000;
`;

export const OrderTitle = styled.h2`
  margin-bottom: 30px;  
  text-align: center;
`;

export const Total = styled.div`
  display: flex;
  margin: 10px 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

export const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

export const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

export const Modal = styled.div`
  background: white;
  width: 600px;
  padding: 30px;
`;