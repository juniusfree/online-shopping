import { Item } from "types";
import data from "items.json";

const useItems = () => {
  const rawData: unknown = Array.from(data);
  const itemData = rawData as Item[];
  return itemData;
};

export default useItems;
