import React, { useContext } from "react";
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signinImg from '../../image/user.svg';
import { Context } from "../Functions/context";

const NavBarStyled = styled.header `
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const ImgLogin = styled.img`
  width: 32px;
  height: 32px;
`;

const Login = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45px;
  height: 54px;

  border: transparent;
  background: transparent;

  font-family: 'Roboto';
  font-size: 16px;

  color: #FFF;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700px;
  cursor: pointer;
  margin-right: 30px;
`;

const Figure = styled.figure`
  margin: 0 10px;
`;


export const NavBar = () => {
  const { auth: { authentication, logIn, logOut } } = useContext(Context);
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt='logo'/>
        <H1>MrDonal's</H1>
      </Logo>
      {authentication ?
          <User>
            <Figure>
              <ImgLogin src={signinImg} alt={authentication.displayName}></ImgLogin>
              <figcaption>{authentication.displayName}</figcaption>
            </Figure>
            <LogOut onClick={logOut} title='Выйти'>Х</LogOut>
          </User>
        : 
          <Login onClick={logIn}>
            <Figure>
              <ImgLogin src={signinImg} alt='войти'></ImgLogin>
              <figcaption>войти</figcaption>
            </Figure>
          </Login>
      }
  
    </NavBarStyled>
  )
}