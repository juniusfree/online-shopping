import { Item, SortOptions } from "types";

const itemSortLowToHighUnitPrice = (a: Item, b: Item) => {
  const aUnitPrice = a.unitPrice;
  const bUnitPrice = b.unitPrice;
  if (aUnitPrice < bUnitPrice) return -1;
  if (aUnitPrice === bUnitPrice) return 0;
  return 1;
};

const itemSortHighToLowUnitPrice = (a: Item, b: Item) => {
  const aUnitPrice = a.unitPrice;
  const bUnitPrice = b.unitPrice;
  if (bUnitPrice < aUnitPrice) return -1;
  if (aUnitPrice === bUnitPrice) return 0;
  return 1;
};

export const sortOptions: SortOptions = {
  lowToHigh: {
    label: "Price: Low To High",
    sortFn: itemSortLowToHighUnitPrice,
  },
  highToLow: {
    label: "Price: High to Low",
    sortFn: itemSortHighToLowUnitPrice,
  },
};
