import React from "react";
import styled from 'styled-components';
import Spinner from 'react-spinkit';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  background: #fff; 
`;

const spinKit = {
  height: '100px',
  width: '100px'
}

export const Spinkit = () => (
  <Wrap>
      <Spinner name='circle' color='black' style={spinKit}/>
  </Wrap>

)