import { AppContext } from "App";
import Cart from "components/Cart";
import CheckoutModal from "components/CheckoutModal";
import useFixedBody from "hooks/useFixedBody";
import ShoppingCart from "icons/ShoppingCart";
import { useContext } from "react";

const HeaderShoppingCart = () => {
  const { shoppingCart, showCart, setShowCart, showCheckout, setShowCheckout } =
    useContext(AppContext);
  const handleShowCart = () => setShowCart((prev) => !prev);
  useFixedBody(showCart);

  return (
    <>
      <div
        className="group flex gap-1 cursor-pointer items-center relative"
        onClick={handleShowCart}
      >
        <ShoppingCart className="fill-gray-500 group-hover:fill-black" />
        <p>{shoppingCart.length}</p>
      </div>
      {showCart && <Cart />}
      {showCheckout && (
        <CheckoutModal
          showCheckout={showCheckout}
          setShowCheckout={setShowCheckout}
        />
      )}
    </>
  );
};

export default HeaderShoppingCart;
