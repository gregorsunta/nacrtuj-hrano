import React, { useContext } from 'react';
import { IProductStore } from '../stores/ProductStore';
import { ICategoryStore } from '../stores/CategoryStore';
import { IFilterStore } from '../stores/FilterStore';

interface IStores {
  categoryStore: ICategoryStore;
  productStore: IProductStore;
  filterStore: IFilterStore;
}

export const StoreContext = React.createContext<IStores>({} as IStores);

export const useStores = () => {
  return useContext(StoreContext);
};
