import { useState } from "react";

export const useOrderConfirm = () => {
  const [openOrderConfirm, setOpenOrderConfirm] = useState(false);

  console.log(222);

  return { openOrderConfirm, setOpenOrderConfirm }
}