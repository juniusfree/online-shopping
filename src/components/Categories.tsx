import { AppContext } from "App";
import XMark from "icons/XMark";
import { useContext, useMemo } from "react";

const Categories = () => {
  const { items, selectedCategory, setSelectedCategory } =
    useContext(AppContext);
  const categories = useMemo(
    () =>
      Array.from(
        new Set(items.map(({ category }) => category))
      ).sort() as string[],
    [items]
  );
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold px-2 text-sm">Categories</p>
      <ul className="flex flex-col gap-1">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <li
              key={category}
              className={`hover:bg-gray-100 cursor-pointer px-2 text-sm rounded capitalize ${
                isSelected && "flex items-center justify-between bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(isSelected ? "" : category)}
            >
              {category}
              {isSelected && <XMark className="fill-gray-500" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
