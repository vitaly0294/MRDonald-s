import React from "react";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';

import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from "./Components/Hooks/useAuth";
import { useTittle } from "./Components/Hooks/useTitle";

import { OrderConfirm } from "./Components/Order/OrderConfirm";
import { useOrderConfirm } from "./Components/Hooks/useOrderConfirm";
import { OrderFinal } from "./Components/Order/OrderFinal";
import { useOrderFinal } from "./Components/Hooks/useOrderFinal";

import { Context } from "./Components/Functions/context";

const firebaseConfig = {
  apiKey: "AIzaSyBQoWh040ZzeEtlaRK5GWFO9Mf70_gbqlQ",
  authDomain: "mrdonalds-ad4f9.firebaseapp.com",
  databaseURL: "https://mrdonalds-ad4f9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mrdonalds-ad4f9",
  storageBucket: "mrdonalds-ad4f9.appspot.com",
  messagingSenderId: "475568377600",
  appId: "1:475568377600:web:1a1962aee8cd0343326de5"
};

const firebase = initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(getAuth(firebase));

  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  const orderFinal = useOrderFinal();
  useTittle(openItem.openItem);

  const firebaseDatabase = () => getDatabase(firebase);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase,
      orderFinal
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu/>
      {openItem.openItem && <ModalItem/>}
      {orderConfirm.openOrderConfirm && <OrderConfirm/>}
      {orderFinal.openOrderFinal && <OrderFinal/>}
    </Context.Provider>
  );
}

export default App;
