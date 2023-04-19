import { useEffect, useState } from "react";
import { Item } from "types";

const useShoppingCartLocalStorage = () => {
  const [shoppingCart, setShoppingCart] = useState<Item["id"][]>(() => {
    const shoppingCartLocalStorage = localStorage.getItem("shoppingCart") || "";
    if (!shoppingCartLocalStorage) return [];
    const storedArray = JSON.parse(shoppingCartLocalStorage);
    return storedArray;
  });

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return [shoppingCart, setShoppingCart];
};

export default useShoppingCartLocalStorage;
