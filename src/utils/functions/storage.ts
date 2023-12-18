import { IStoreItemParams } from "@/utils/types/t_store";

export const getLocalStorageItem = (itemName: string) => {
  const item = localStorage.getItem(itemName);
  return item;
};

export const storeItemInLocalStorage = ({
  itemName,
  value,
}: IStoreItemParams) => {
  localStorage.setItem(itemName, value);
};

export const removeStorageItem = (itemName: string) => {
  localStorage.removeItem(itemName);
};
