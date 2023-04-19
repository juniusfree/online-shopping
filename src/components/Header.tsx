import { AppContext } from "App";
import HeaderShoppingCart from "components/HeaderShoppingCart";
import HeaderSort from "components/HeaderSort";
import { useContext } from "react";

const Header = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);

  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div className="p-4 flex justify-between items-center w-full">
      <p className="text-3xl font-bold">Online Shopping Store</p>
      <div className="flex items-center gap-4">
        <div>
          <input
            value={searchValue}
            onChange={handleSearch}
            type="text"
            placeholder="Search product name"
            className="block w-full focus:w-80 rounded border-0 ring-1 ring-gray-300 py-1 px-2 placeholder:text-gray-400 focus:ring-gray-300"
          />
        </div>
        <HeaderSort />
        <div>
          <HeaderShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
