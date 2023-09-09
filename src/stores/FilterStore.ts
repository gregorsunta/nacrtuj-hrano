import { makeAutoObservable } from 'mobx';
import { IRootStore } from './RootStore';

export interface IFilterStore {
  shopFilter: string[];
  subcategoryFilter: string[];
  clearSubcategoryFilter(): void;
  toggleShopFilter(filter: string): void;
  toggleSubcategoryFilter(filter: string): void;
}

class FilterStore implements IFilterStore {
  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
  rootStore: IRootStore;

  shopFilter: string[] = [
    'Tuš',
    'Spar',
    'Eurospin',
    'Hofer',
    'Lidl',
    'Mercator',
  ];
  subcategoryFilter: string[] = [];

  clearSubcategoryFilter = () => {
    this.subcategoryFilter = [];
  };

  setShopFilter = (shopFilter: string[]) => {
    this.shopFilter = shopFilter;
  };

  setCategoryFilter = (subcategoryFilter: string[]) => {
    this.subcategoryFilter = subcategoryFilter;
  };

  toggleShopFilter = (filter: string) => {
    if (this.shopFilter.includes(filter)) {
      const leftover = this.shopFilter.filter((name) => name !== filter);
      this.setShopFilter(leftover);
    } else {
      this.shopFilter.push(filter);
    }
  };

  toggleSubcategoryFilter = (filter: string) => {
    if (this.subcategoryFilter.includes(filter)) {
      const leftover = this.subcategoryFilter.filter((name) => name !== filter);
      this.setCategoryFilter(leftover);
    } else {
      this.subcategoryFilter.push(filter);
    }
  };

  logConsole = () => {
    console.log(this.subcategoryFilter);
  };
}

// const filterStore = new FilterStore(rootStore);
export { FilterStore };
