// import React from "react";
import styled from 'styled-components';


export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  border: transparent;
  background: #299B01;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  color: #fff;

  transition-property: color, background-color, border-color;
  transition-duration: .3s;

  &:hover {
    border: 1px solid #299B01;
    color: #299B01;
    background: #fff;
  }

  &:disabled {
    color: #bbb;
    background: #ccc;
    border-color: #aaa;
  }
`;