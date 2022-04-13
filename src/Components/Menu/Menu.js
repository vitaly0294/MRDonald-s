import React from "react";
import styled from 'styled-components';
// import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { Banner } from "./Banner";
import { useFetch } from "../Hooks/useFetch";
import { Spinkit } from "../SpinKit";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin: 80px 0 0 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = () => {
  const res = useFetch();
  const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner/>
      { res.response ?
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}/> 
          </SectionMenu>
      
          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other}/> 
          </SectionMenu>
        </> : res.error ? <div>Sorry, we will fix it soon...</div> : <Spinkit/>
      }
    </MenuStyled>
  )
}
