import { AppContext } from "App";
import useOnClickOutside from "hooks/useOnClickOutside";
import ChevronDown from "icons/ChevronDown";
import { useContext, useRef, useState } from "react";

const HeaderSort = () => {
  const { sortOptions, setSelectedSortOption } = useContext(AppContext);
  const [showPopover, setShowPopover] = useState(false);
  const handleSetShowPopover = () => setShowPopover((prev) => !prev);
  const handleSelectSortOption = (key: string) => {
    handleSetShowPopover();
    setSelectedSortOption(key);
  };
  const ref = useRef(null);
  const handleClickOutside = () => {
    setShowPopover(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="relative cursor-pointer">
      <div
        className="group flex gap-1 items-center"
        onClick={handleSetShowPopover}
      >
        <p>Sort</p>
        <ChevronDown className="fill-gray-500 group-hover:fill-black" />
      </div>
      {showPopover && (
        <ul
          ref={ref}
          className="absolute bg-white top-8 right-0 rounded border w-40 text-sm"
        >
          {Object.keys(sortOptions).map((key) => (
            <li
              key={key}
              className="p-2 hover:bg-gray-100"
              onClick={() => handleSelectSortOption(key)}
            >
              {sortOptions[key].label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeaderSort;
