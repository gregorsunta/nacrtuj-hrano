import React, { useContext } from 'react';
import { IRootStore } from '../stores/RootStore';

export const StoreContext = React.createContext<IRootStore>({} as IRootStore);

export const useRootStore = () => {
  return useContext(StoreContext);
};
