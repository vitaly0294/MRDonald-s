import { useEffect } from "react";

export function useTittle(openItem) {
  useEffect(() => {
    document.title = openItem ? openItem.name : 'MRDonalds';
  }, [openItem]);
}

