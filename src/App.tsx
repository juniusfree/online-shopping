import Categories from "components/Categories";
import Header from "components/Header";
import Products from "components/Products";
import { sortOptions } from "helpers";
import useItems from "hooks/useItems";
import useShoppingCartLocalStorage from "hooks/useShoppingCartLocalStorage";
import { createContext, useMemo, useState } from "react";

export const AppContext = createContext(null);

function App() {
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [shoppingCart, setShoppingCart] = useShoppingCartLocalStorage();
  const items = useItems();
  const filteredSortedItems = useMemo(() => {
    const copyItems = [...items];
    copyItems.sort(sortOptions?.[selectedSortOption]?.sortFn);
    const filteredByCategory = selectedCategory
      ? copyItems.filter(({ category }) => category === selectedCategory)
      : copyItems;
    const filteredBySearchValue = searchValue
      ? filteredByCategory.filter((item) =>
          item.productName.toLowerCase().includes(searchValue.toLowerCase())
        )
      : filteredByCategory;
    return filteredBySearchValue;
  }, [items, searchValue, selectedCategory, selectedSortOption]);

  const appContextValue = useMemo(
    () => ({
      shoppingCart,
      setShoppingCart,
      items,
      showCart,
      setShowCart,
      showCheckout,
      setShowCheckout,
      selectedCategory,
      setSelectedCategory,
      sortOptions,
      setSelectedSortOption,
      searchValue,
      setSearchValue,
      filteredSortedItems,
    }),
    [
      filteredSortedItems,
      items,
      searchValue,
      selectedCategory,
      setShoppingCart,
      shoppingCart,
      showCart,
      showCheckout,
    ]
  );

  return (
    <AppContext.Provider value={appContextValue}>
      <div className="relative mx-auto w-full">
        <div className="sticky top-0 z-50 bg-white border-b shadow-sm w-full">
          <Header />
        </div>
        <div className="flex gap-4 w-full relative px-4 mt-10">
          <div className="w-40 fixed bg-white h-full">
            <Categories />
          </div>
          <div className="ml-44 flex-grow">
            <Products />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
