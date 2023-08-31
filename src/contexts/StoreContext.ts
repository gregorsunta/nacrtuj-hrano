import React, { useContext } from 'react';
import { IProductStore } from '../stores/ProductStore';
import { ICategoryStore } from '../stores/CategoryStore';

interface IStores {
  categoryStore: ICategoryStore;
  productStore: IProductStore;
}

export const StoreContext = React.createContext<IStores>({} as IStores);

export const useStores = () => {
  return useContext(StoreContext);
};
