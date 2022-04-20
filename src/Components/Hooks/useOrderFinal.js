import { useState } from "react";

export const useOrderFinal = () => {
  const [openOrderFinal, setOpenOrderFinal] = useState(false);

  console.log(111);
  const orderDelay = () => {
    setOpenOrderFinal(true);

    const timer = setTimeout(() => {
      setOpenOrderFinal(false);
      clearTimeout(timer);
    }, 1500)
  }

  return { openOrderFinal, orderDelay }
}