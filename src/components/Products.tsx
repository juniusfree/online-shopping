import { AppContext } from "App";
import { useContext } from "react";
import { Item } from "types";
import { unitPriceFormatter } from "utils";

const Products = () => {
  const { filteredSortedItems, setShoppingCart } = useContext(AppContext);
  const handleAddToCart = (id: Item["id"]) => {
    setShoppingCart((prev) => [id, ...prev]);
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      {filteredSortedItems.map(
        ({ id, productName, category, description, unitPrice, imageUrl }) => (
          <div
            key={id}
            className="flex border border-gray-200 gap-8 rounded p-4"
          >
            <div className="flex w-72 h-72 overflow-hidden items-center justify-center rounded">
              <img src={imageUrl} alt={`${productName}`} className="rounded" />
            </div>
            <div className="w-3/4 ">
              <p className="uppercase font-bold bg-gray-100 text-gray-600 text-xs w-fit py-1 px-2 rounded-full">
                {category}
              </p>
              <p className="text-2xl font-bold mt-2">{productName}</p>
              <p className="text-2xl mt-2">
                {unitPriceFormatter.format(parseFloat(unitPrice))}
              </p>
              <p className="text-gray-600 mt-2">{description}</p>
              <button
                className="bg-green-500 text-white w-80 rounded p-2 mt-8"
                onClick={() => handleAddToCart(id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
