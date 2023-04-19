import { AppContext } from "App";
import { useContext } from "react";
import { Item } from "types";
import { unitPriceFormatter } from "utils";

const CartItem = ({
  id,
  productName,
  quantity,
  imageUrl,
  unitPrice,
  category,
}) => {
  const { setShoppingCart } = useContext(AppContext);

  const handleRemoveItem = (id: Item["id"]) =>
    setShoppingCart((prev) => prev.filter((i) => i !== id));

  const handleIncreaseQuantity = (id: Item["id"]) =>
    setShoppingCart((prev) => [...prev, id]);

  const handleDecreaseQuantity = (id: Item["id"]) =>
    setShoppingCart((prev) => {
      const itemIndex = prev.lastIndexOf(id);
      return prev.filter((i, index) => index !== itemIndex);
    });

  return (
    <div className="flex justify-between w-full gap-4 border-b border-b-gray-200 py-4">
      <div className="flex w-20 h-full p-2 items-center justify-center border rounded overflow-hidden">
        <img src={imageUrl} alt={productName} />
      </div>
      <div className="text-sm w-full flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between font-medium">
            <p>{productName}</p>
            <p>{unitPriceFormatter.format(unitPrice * quantity)}</p>
          </div>
          <p className="text-gray-500 text-xs capitalize">{category}</p>
          <p className="text-gray-500 text-xs capitalize">
            {unitPriceFormatter.format(unitPrice)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <button onClick={() => handleDecreaseQuantity(id)} className="px-1">
              -
            </button>
            <p>{quantity}</p>
            <button onClick={() => handleIncreaseQuantity(id)} className="px-1">
              +
            </button>
          </div>
          <p
            className="cursor-pointer text-green-500 font-bold"
            onClick={() => handleRemoveItem(id)}
          >
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
