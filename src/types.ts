export interface Item {
  id: string;
  productName: string;
  description: string;
  unitPrice: string;
  category: string;
  imageUrl: string;
}

export type SortOptions = {
  [key: string]: {
    label: string;
    sortFn: (a: Item, b: Item) => number;
  };
};
