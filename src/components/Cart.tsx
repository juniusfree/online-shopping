import { AppContext } from "App";
import CartItem from "components/CartItem";
import useOnClickOutside from "hooks/useOnClickOutside";
import Trash from "icons/Trash";
import XMark from "icons/XMark";
import { useContext, useMemo, useRef } from "react";
import { unitPriceFormatter } from "utils";

const Cart = () => {
  const { setShoppingCart, shoppingCart, items, setShowCheckout, setShowCart } =
    useContext(AppContext);

  const shoppingCartById = useMemo(
    () =>
      shoppingCart.reduce((acc: any, id: string) => {
        if (!acc[id]) {
          const item = items.find((i) => i.id === id);
          acc[id] = {
            ...item,
            quantity: 1,
          };
          return acc;
        }
        acc[id] = {
          ...acc[id],
          quantity: acc[id].quantity + 1,
        };
        return acc;
      }, {}),
    [items, shoppingCart]
  );

  const totalPrice = useMemo(
    () =>
      Object.keys(shoppingCartById).reduce((prev, curr) => {
        const item = shoppingCartById[curr];
        const totalItemPrice = item.quantity * item.unitPrice;
        return prev + totalItemPrice;
      }, 0),
    [shoppingCartById]
  );

  const handleClearCart = () => setShoppingCart([]);

  const handleCheckout = () => {
    setShowCheckout(true);
    setShoppingCart([]);
    setShowCart(false);
  };

  const ref = useRef(null);
  const handleClickOutside = () => {
    setShowCart(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <div className="absolute top-0 right-0 w-full z-50">
      <div className="w-full border h-screen flex justify-end bg-transparent relative">
        <div className="w-full bg-black opacity-20" />
        <div ref={ref} className="w-1/2 h-full bg-white relative flex flex-col">
          <div className=" bg-white flex justify-between items-center p-4">
            <p className="font-bold">My Cart</p>
            <div className="flex items-center gap-1">
              <div
                onClick={() => setShowCart(false)}
                className="cursor-pointer"
              >
                <XMark className="fill-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col h-1/2 overflow-y-scroll px-4">
            {Object.keys(shoppingCartById).map((key) => {
              const item = shoppingCartById[key];
              return <CartItem {...item} />;
            })}
          </div>
          <div className="bg-white border-t p-4 flex items-center justify-between w-full flex-col gap-4">
            <div className="flex justify-between gap-1 w-full font-medium">
              <p>Total</p>
              <p>{unitPriceFormatter.format(totalPrice)}</p>
            </div>
            <button
              onClick={handleCheckout}
              className={` text-white rounded p-2 w-full font-medium ${
                shoppingCart.length ? "bg-green-500" : "bg-gray-300"
              }`}
              disabled={!shoppingCart.length}
            >
              Checkout ({shoppingCart.length} items)
            </button>
            <button
              onClick={handleClearCart}
              className="flex items-center gap-1 text-gray-400 outline outline-gray-400  text-sm px-2 py-1 rounded-full font-medium"
            >
              <Trash />
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
